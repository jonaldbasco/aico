using aico.core.app.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SemanticKernel;

namespace aico.core.app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthSummarizerController : Controller
    {
        private readonly Kernel _kernel;
        private readonly JsonLoaderService _jsonLoader;

        public HealthSummarizerController(Kernel kernel, JsonLoaderService jsonLoader)
        {
            _kernel = kernel;
            _jsonLoader = jsonLoader;
        }

        [HttpPost("healthSummarizer")]
        public async Task<IActionResult> Summarize(string fileName)
        {
            // Load JSON content from the specified file
            string content = _jsonLoader.LoadJsonInput(fileName);

            // Retrieve the plugin and prompt file path
            var plugin = _kernel.Plugins["HealthSummarizer"];
            string promptFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Plugin", "HealthSummarizer", "summary.skprompt.txt");
            string promptText = System.IO.File.ReadAllText(promptFilePath);

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
            return Ok(result.GetValue<string>());
        }
    }

}
