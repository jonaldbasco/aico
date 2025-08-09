using aico.core.app.Models;
using aico.core.app.Services;
using aico.core.app.Sources;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.SemanticKernel;

namespace aico.core.app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AgentController(Kernel kernel, JsonLoaderService jsonLoader, AicoDBContext context) : Controller
    {
        private readonly Kernel _kernel = kernel;
        private readonly JsonLoaderService _jsonLoader = jsonLoader;
        private readonly AicoDBContext _context = context;

        [HttpPost("healthSummarizer")]
        public async Task<IActionResult> Summarize(string fileName)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "summary.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

            string maxicarePromptPath = Path.Combine(Directory.GetCurrentDirectory(), "Scripts", "maxicare_details.json");
            string promptMaxicare = System.IO.File.ReadAllText(maxicarePromptPath);

            var existingUser = await _context.BasicProfileClass
                .FirstOrDefaultAsync(u => u.FileName == fileName);

            if (existingUser == null)
            {
                return Conflict("User not exist. Use BasicProfile() first");
            }

            // Configure the prompt template
            var promptConfig = new PromptTemplateConfig
            {
                Name = "HealthSummarizer",
                Description = "Acts as a medical assistant to summarize health data with lifestyle tips and next steps.",
                TemplateFormat = "semantic-kernel",
                Template = promptText,
                InputVariables = new List<InputVariable>
                {
                    new InputVariable
                    {
                        Name = "healthData",
                        Description = "Raw health data provided by the user"
                    }
                }
            };

            // Create the summarizer function
            var summarizerFunction = _kernel.CreateFunctionFromPrompt(promptConfig);

            // Invoke the function with the loaded content
            var result = await summarizerFunction.InvokeAsync(_kernel, new KernelArguments
            {
                ["input"] = content
            });

            // Transform the result to JSON format
            var parsedJson = AicoFinalJSONResult.Parse(result.GetValue<string>()!);

            try
            {
                // Save the summary to the database
                _context.Add(new HealthSummaryClass
                {
                    Id = CreateGUID.Generate(),
                    FileName = fileName,
                    Summary = parsedJson.ToString()!,
                    CreatedAt = DateTime.UtcNow
                });
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Log and handle error
                return StatusCode(500, ex.Message);
            }

            // Return the summary result
            return Ok(parsedJson);
        }

        [HttpPost("getBasicProfile")]
        public async Task<IActionResult> BasicProfile(string fileName)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "basicprofile.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

            var existingUser = await _context.BasicProfileClass
                .FirstOrDefaultAsync(u => u.FileName == fileName);

            if (existingUser != null)
            {
                return Conflict("User exists");
            }

            // Configure the prompt template
            var promptConfig = new PromptTemplateConfig
            {
                Name = "HealthSummarizer",
                Description = "Capture the Basic Profile Class.",
                TemplateFormat = "semantic-kernel",
                Template = promptText,
                InputVariables = new List<InputVariable>
                {
                    new InputVariable
                    {
                        Name = "healthData",
                        Description = "Raw health data provided by the user"
                    }
                }
            };

            // Create the summarizer function
            var summarizerFunction = _kernel.CreateFunctionFromPrompt(promptConfig);

            // Invoke the function with the loaded content
            var result = await summarizerFunction.InvokeAsync(_kernel, new KernelArguments
            {
                ["input"] = content
            });

            // Transform the result to JSON format
            var parsedJson = AicoFinalJSONResult.Parse(result.GetValue<string>()!);

            try
            {
                // Save the summary to the database
                _context.Add(new BasicProfileClass
                {
                    Id = CreateGUID.Generate(),
                    FileName = fileName,
                    Summary = parsedJson.ToString()!,
                    CreatedAt = DateTime.UtcNow
                });
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Log and handle error
                return StatusCode(500, ex.Message);
            }

            // Return the summary result
            return Ok(parsedJson);
        }

        [HttpPost("Diseases")]
        public async Task<IActionResult> Diseases(string fileName)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "diseases.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

            // Configure the prompt template
            var promptConfig = new PromptTemplateConfig
            {
                Name = "DiseasesSummarizer",
                Description = "Acts as a medical assistant to enlist all diseases, given the health data.",
                TemplateFormat = "semantic-kernel",
                Template = promptText,
                InputVariables = new List<InputVariable>
                {
                    new InputVariable
                    {
                        Name = "healthData",
                        Description = "Raw health data provided by the user"
                    }
                }
            };

            // Create the summarizer function
            var summarizerFunction = _kernel.CreateFunctionFromPrompt(promptConfig);

            // Invoke the function with the loaded content
            var result = await summarizerFunction.InvokeAsync(_kernel, new KernelArguments
            {
                ["input"] = content
            });

            // Transform the result to JSON format
            var parsedJson = AicoFinalJSONResult.Parse(result.GetValue<string>()!);

            try
            {
                // Save the summary to the database
                _context.Add(new DiseasesClass
                {
                    Id = CreateGUID.Generate(),
                    FileName = fileName,
                    Summary = parsedJson.ToString()!,
                    CreatedAt = DateTime.UtcNow
                });
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Log and handle error
                return StatusCode(500, ex.Message);
            }

            // Return the summary result
            return Ok(parsedJson);

        }

        [HttpPost("IsCovered")]
        public async Task<IActionResult> IsCovered(string fileName)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "covered.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

            // Configure the prompt template
            var promptConfig = new PromptTemplateConfig
            {
                Name = "IsCovered",
                Description = "Acts as a medical assistant to assess if given diseases is covered.",
                TemplateFormat = "semantic-kernel",
                Template = promptText,
                InputVariables = new List<InputVariable>
                {
                    new InputVariable
                    {
                        Name = "healthData",
                        Description = "Raw health data provided by the user"
                    }
                }
            };

            // Create the summarizer function
            var summarizerFunction = _kernel.CreateFunctionFromPrompt(promptConfig);

            // Invoke the function with the loaded content
            var result = await summarizerFunction.InvokeAsync(_kernel, new KernelArguments
            {
                ["input"] = content,
                ["maxicare"] = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Scripts", "maxicare_details.json"))
            });

            // Transform the result to JSON format
            var parsedJson = AicoFinalJSONResult.Parse(result.GetValue<string>()!);

            try
            {
                // Save the summary to the database
                _context.Add(new IsCoveredClass
                {
                    Id = CreateGUID.Generate(),
                    FileName = fileName,
                    Summary = parsedJson.ToString()!,
                    CreatedAt = DateTime.UtcNow
                });
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Log and handle error
                return StatusCode(500, ex.Message);
            }

            // Return the summary result
            return Ok(parsedJson);
        }

        [HttpPost("Procedure")]
        public async Task<IActionResult> Procedure(string fileName, string chosenProcedure)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "procedure.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

            // Configure the prompt template
            var promptConfig = new PromptTemplateConfig
            {
                Name = "IsCovered",
                Description = "Act as a medical assistant in the Philippines that knows medical procedures.",
                TemplateFormat = "semantic-kernel",
                Template = promptText,
                InputVariables = new List<InputVariable>
                {
                    new InputVariable
                    {
                        Name = "healthData",
                        Description = "Raw health data provided by the user"
                    }
                }
            };

            // Create the summarizer function
            var summarizerFunction = _kernel.CreateFunctionFromPrompt(promptConfig);

            // Invoke the function with the loaded content
            var result = await summarizerFunction.InvokeAsync(_kernel, new KernelArguments
            {
                ["input"] = content,
                ["maxicare"] = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Scripts", "maxicare_details.json")),
                ["procedure"] = chosenProcedure
            });

            // Transform the result to JSON format
            var parsedJson = AicoFinalJSONResult.Parse(result.GetValue<string>()!);

            try
            {
                // Save the summary to the database
                _context.Add(new ProcedureClass
                {
                    Id = CreateGUID.Generate(),
                    FileName = fileName,
                    Summary = parsedJson.ToString()!,
                    CreatedAt = DateTime.UtcNow
                });
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Log and handle error
                return StatusCode(500, ex.Message);
            }

            // Return the summary result
            return Ok(parsedJson);
        }

        [HttpPost("Cost")]
        public async Task<IActionResult> Cost(string fileName)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "cost.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

            BasicProfileClass? existingUser = await _context.BasicProfileClass
                .FirstOrDefaultAsync(u => u.FileName == fileName);

            HealthSummaryClass? existingHealthSummary = await _context.HealthSummaryClass
                .FirstOrDefaultAsync(u => u.FileName == fileName);

            if (existingUser == null)
            {
                return Conflict("User not exist. Use BasicProfile() first");
            }
            else if (existingHealthSummary == null)
            {
                return Conflict("Health Summary not exist. Use HealthSummarizer() first");
            }

            // Configure the prompt template
            var promptConfig = new PromptTemplateConfig
            {
                Name = "Cost",
                Description = "Act as a medical assistant in the Philippines that knows the total cost of laboratory test and consultation.",
                TemplateFormat = "semantic-kernel",
                Template = promptText,
                InputVariables = new List<InputVariable>
                {
                    new InputVariable
                    {
                        Name = "healthData",
                        Description = "Raw health data provided by the user"
                    }
                }
            };

            // Create the summarizer function
            var summarizerFunction = _kernel.CreateFunctionFromPrompt(promptConfig);

            // Invoke the function with the loaded content
            var result = await summarizerFunction.InvokeAsync(_kernel, new KernelArguments
            {
                ["basicProfile"] = existingUser.Summary,
                ["maxicare"] = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Scripts", "maxicare_details.json")),
                ["laboratoryAndConsult"] = existingHealthSummary.Summary
            });

            // Transform the result to JSON format
            var parsedJson = AicoFinalJSONResult.Parse(result.GetValue<string>()!);

            try
            {
                // Save the summary to the database
                _context.Add(new CostClass
                {
                    Id = CreateGUID.Generate(),
                    FileName = fileName,
                    Summary = parsedJson.ToString()!,
                    CreatedAt = DateTime.UtcNow
                });
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Log and handle error
                return StatusCode(500, ex.Message);
            }

            // Return the summary result
            return Ok(parsedJson);
        }

    }
}
