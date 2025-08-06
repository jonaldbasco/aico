using aico.core.app.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.ComponentModel;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace aico.core.app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OpenAIController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly OpenAIConfig _config;
        private readonly JsonSerializerOptions _jsonOptions;

        public OpenAIController(HttpClient httpClient, IOptions<OpenAIConfig> config)
        {
            _httpClient = httpClient;
            _config = config.Value;

            //Console.WriteLine($"[DEBUG] Controller received API Key: {_config.ApiKey ?? "NULL"}");

            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _config.ApiKey);

            _jsonOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };
        }



        [HttpPost("chat")]
        public async Task<IActionResult> Chat([FromBody] ChatRequest request)
        {
            var userPrompt = new
            {
                model = _config.Model,
                messages = new[]
                {
                    new { role = "user", content = request.Message }
                }
            };

            var jsonContent = new StringContent(
                JsonSerializer.Serialize(userPrompt, _jsonOptions),
                Encoding.UTF8,
                "application/json"
            );

            var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", jsonContent);

            if (!response.IsSuccessStatusCode)
            {
                var error = await response.Content.ReadAsStringAsync();
                return StatusCode((int)response.StatusCode, error);
            }

            var result = await response.Content.ReadAsStringAsync();
            return Content(result, "application/json");
        }

        [HttpPost("ParsingAgent")]
        public async Task<IActionResult> ParsingAgent([FromBody] String fileName)
        {
            string filePath = @"C:\Users\User\source\repos\jonaldbasco\aico\aico.core.app\Scripts\"+fileName+".json";
            string rawJson = System.IO.File.ReadAllText(filePath);

            //var healthData = JsonSerializer.Deserialize<dynamic>(rawJson);

            var userPrompt = new
            {
                model = _config.Model,
                messages = new[]
                {
                    new { role = "system", content = "You are AICo, a warm and clear medical assistant. When the user provides health info, translate results into simple guidance. Mention lifestyle tips and next action steps. At max, return 1,500 characters." },
                    new { role = "user", content = rawJson } // or summarize key portions before sending
                }
            };

            var jsonContent = new StringContent(
                JsonSerializer.Serialize(userPrompt, _jsonOptions),
                Encoding.UTF8,
                "application/json"
            );

            var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", jsonContent);

            if (!response.IsSuccessStatusCode)
            {
                var error = await response.Content.ReadAsStringAsync();
                return StatusCode((int)response.StatusCode, error);
            }

            var result = await response.Content.ReadAsStringAsync();
            //return Content(result, "application/json");
            return Content(result);
        }
    }

    public class ChatRequest
    {
        public required string Message { get; set; }
    }
}
