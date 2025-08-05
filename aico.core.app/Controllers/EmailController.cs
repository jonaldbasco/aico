using Microsoft.AspNetCore.Mvc;
using Microsoft.SemanticKernel;

namespace aico.core.app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly Kernel _kernel;
        public EmailController(Kernel kernel)
        {
            _kernel = kernel;
        }

        [HttpPost("send-email")]
        public async Task<IActionResult> SendEmail([FromQuery] string to, [FromQuery] string subject, [FromQuery] string body)
        {
            if (string.IsNullOrWhiteSpace(to) || string.IsNullOrWhiteSpace(subject) || string.IsNullOrWhiteSpace(body))
                return BadRequest("Missing required query parameters: 'to', 'subject', and 'body'.");

            try
            {
                var result = await _kernel.InvokeAsync("email", "SendTestEmail", new KernelArguments
                {
                    ["to"] = to,
                    ["subject"] = subject,
                    ["body"] = body
                });

                return Ok(result.GetValue<string>());
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }
    }
}