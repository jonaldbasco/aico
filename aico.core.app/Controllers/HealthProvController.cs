using Microsoft.AspNetCore.Mvc;

namespace aico.core.app.Controllers
{
    public class HealthProvController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
