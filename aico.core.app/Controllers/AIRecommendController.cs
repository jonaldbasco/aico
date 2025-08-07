using Microsoft.AspNetCore.Mvc;

namespace aico.core.app.Controllers
{
    public class AIRecommendController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
