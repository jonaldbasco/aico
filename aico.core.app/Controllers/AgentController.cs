using aico.core.app.Classes;
using aico.core.app.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SemanticKernel;
using OpenAI;
using System.ComponentModel.DataAnnotations;

namespace aico.core.app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AgentController(Kernel kernel, JsonLoaderService jsonLoader) : Controller
    {
        private readonly Kernel _kernel = kernel;
        private readonly JsonLoaderService _jsonLoader = jsonLoader;

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

            // Return the summary result
            return JsonValidator.IsValidJson(content) ? Ok(result.GetValue<string>()) : BadRequest(new { error = result.ToString() });
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

            // Return the summary result
            return Ok(result.GetValue<string>());
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
                ["maxicareDetails"] = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Scripts", "maxicare_details.json"))
            });

            // Return the summary result
            return Ok(result.GetValue<string>());
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
                ["maxicareDetails"] = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Scripts", "maxicare_details.json")),
                ["procedure"] = chosenProcedure
            });

            // Return the summary result
            return Ok(result.GetValue<string>());
        }
    }
}
