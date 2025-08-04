using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using aico.core.app.Models;
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

        public OpenAIController(HttpClient httpClient, IOptions<OpenAIConfig> config)
        {
            _httpClient = httpClient;
            _config = config.Value;
        }

        [HttpPost("chat")]
        public async Task<IActionResult> Chat([FromBody] ChatRequest request)
        {
            var payload = new
            {
                model = _config.Model,
                messages = new[]
                {
                    new { role = "user", content = request.Message }
                }
            };

            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", _config.ApiKey);

            var jsonContent = new StringContent(
                JsonSerializer.Serialize(payload),
                Encoding.UTF8,
                "application/json"
            );

            var response = await _httpClient.PostAsync(
                "https://api.openai.com/v1/chat/completions",
                jsonContent
            );

            var result = await response.Content.ReadAsStringAsync();
            return Content(result, "application/json");
        }
    }

    public class ChatRequest
    {
        public required string Message { get; set; }
    }
}
