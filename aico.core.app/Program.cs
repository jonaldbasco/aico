using aico.core.app.Controllers;
using aico.core.app.Models;
using aico.core.app.Sources;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

// -----------------------------
// 1. Configure Services
// -----------------------------

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// MVC / Controllers
builder.Services.AddControllersWithViews();

// Entity Framework - SQL Server
var aicoConnectionString = builder.Configuration.GetConnectionString("aicoConnectionString");
builder.Services.AddDbContext<aicoDBContext>(options =>
    options.UseSqlServer(aicoConnectionString));

// OpenAI Config Binding
builder.Services.Configure<OpenAIConfig>(builder.Configuration.GetSection("OpenAI"));
//builder.Services.AddHttpClient<OpenAIController>();
builder.Services.AddHttpClient<OpenAIController>((sp, client) =>
{
    var config = sp.GetRequiredService<IOptions<OpenAIConfig>>().Value;
    client.BaseAddress = new Uri("https://api.openai.com/v1/");
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", config.ApiKey);
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
});

// -----------------------------
// 2. Build App
// -----------------------------
var app = builder.Build();

// -----------------------------
// 3. Configure Middleware
// -----------------------------

if (app.Environment.IsDevelopment())
{
    // Swagger in Development
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "AICO API V1");
        c.RoutePrefix = "swagger"; // Available at /swagger
    });
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// -----------------------------
// 4. Endpoint Mapping
// -----------------------------
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Register}/{action=Index}/{id?}");

app.Run();