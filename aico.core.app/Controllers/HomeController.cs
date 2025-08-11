using aico.core.app.Models;
using aico.core.app.Sources;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using OpenAI;
using System.Diagnostics;
using System.Runtime.InteropServices.JavaScript;

namespace aico.core.app.Controllers
{
    //public class HomeController: Controller
    //{
    //    private readonly HttpClient _client;
    //    private readonly AicoDBContext _context;

    //    public HomeController(IHttpClientFactory factory, AicoDBContext context)
    //    {
    //        _client = factory.CreateClient("IgnoreSSL");
    //        _client.BaseAddress = new Uri("http://localhost:8000/");
    //        _context = context;
    //    }

    //    public async Task<ActionResult> Index(string fileName)
    //    {
    //        //const string fileName = "DummyData1";

    //        var content = new FormUrlEncodedContent(new[]{ new KeyValuePair<string, string>("fileName", fileName) });

    //        //var userProfile = GetBasicProfile(content);
    //        var basicProfile = await _client.PostAsync("Agent/BasicProfile", content);
    //        basicProfile.EnsureSuccessStatusCode();
    //        //var getBasicProfile = await _client.PostAsync("Agent/Diseases", content);

    //        //var finalUserProfile = getBasicProfile.ToString();
    //        var json = await basicProfile.Content.ReadAsStringAsync();
    //        Console.WriteLine("Response: " + json);

    //        if (json == "User exists")
    //        {
    //            var existingUser = await _context.BasicProfileClass
    //                .OrderByDescending(u => u.CreatedAt)
    //                .FirstOrDefaultAsync(u => u.FileName == fileName);

    //            if (existingUser != null)
    //            {
    //                Console.WriteLine("View.Dashboard.Json: " + existingUser.Summary);
    //                ViewBag.BasicProfile = JObject.Parse(existingUser.Summary);
    //                return View(); // ? Return early to avoid overwriting ViewBag
    //            }

    //            ViewBag.Error = "User exists but not found in DB.";
    //            return View("Error");
    //        }

    //        // Handle both array and object responses safely
    //        try
    //        {
    //            var data = JArray.Parse(json);
    //            ViewBag.BasicProfile = data;
    //        }
    //        catch (JsonReaderException)
    //        {
    //            ViewBag.BasicProfile = JObject.Parse(json);
    //        }

    //        return View();
    //    }

    //    public IActionResult Privacy()
    //    {
    //        return View();
    //    }
    //}

    
}
