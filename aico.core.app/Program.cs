using aico.core.app.Controllers;
using aico.core.app.Models;
using aico.core.app.Sources;
using Microsoft.EntityFrameworkCore;

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
builder.Services.AddHttpClient<OpenAIController>();


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