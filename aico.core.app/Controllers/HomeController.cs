using aico.core.app.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using aico.core.app.Classes;
using Microsoft.Extensions.Configuration;
using aico.core.app.Sources;

namespace aico.core.app.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        private readonly aicoDBContext _aicoDBContext;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration, aicoDBContext aicoDBContext)
        {
            _logger = logger;
            _configuration = configuration;
            _aicoDBContext = aicoDBContext;
        }

        public IActionResult Index()
        {
            //TEST FOR OPENAI
            //OpenAIClass oac = new OpenAIClass(_configuration);
            //string result = oac.send("What is Accenture?").GetOutputText();

            //TEST FOR DATABASE
            //List<plan> plans = _aicoDBContext.plans.ToList();

            //plan p = new plan();
            //p.name = "test plan 1";
            //p.description = "test plan 1";
            //p.active = true;
            //_aicoDBContext.plans.Add(p);
            //_aicoDBContext.SaveChanges();

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public JsonResult PromptResult(string prompt)
        {

            OpenAIClass oac = new OpenAIClass(_configuration);
            string result = oac.send(prompt).GetOutputText();
            ViewBag.Result = result;

            return Json(new { });
        }
    }
}
