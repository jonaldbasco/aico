using Microsoft.AspNetCore.Mvc;

namespace aico.core.app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok("Hello from Swagger!");
    }

}
