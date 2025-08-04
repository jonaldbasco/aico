using Microsoft.AspNetCore.Mvc;

namespace aico.core.app.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
