using aico.core.app.Classes;
using aico.core.app.Controllers;
using aico.core.app.Models;
using aico.core.app.Plugin; // <- EmailPlugin is in this namespace
using aico.core.app.Services;
using aico.core.app.Sources;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.SemanticKernel;
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

builder.Services.AddHttpClient<OpenAIController>((sp, client) =>
{
    var config = sp.GetRequiredService<IOptions<OpenAIConfig>>().Value;
    client.BaseAddress = new Uri("https://api.openai.com/v1/");
    //client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", config.ApiKey);
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
});

// -----------------------------
// 2. Semantic Kernel & EmailPlugin Setup
// -----------------------------
builder.Services.AddScoped<JsonLoaderService>();
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("Email"));
builder.Services.AddSingleton<EmailPlugin>();

// Register Semantic Kernel
builder.Services.AddSingleton<Kernel>(sp =>
{
    var config = sp.GetRequiredService<IOptions<OpenAIConfig>>().Value;
    var emailPlugin = sp.GetRequiredService<EmailPlugin>();

    var builder = Kernel.CreateBuilder();

    // Import plugins BEFORE building the kernel
    builder.AddOpenAIChatCompletion(
        modelId: config.Model,
        apiKey: config.ApiKey
    );
    builder.Plugins.AddFromPromptDirectory("Plugin", "HealthSummarizer"); // Health Summary Plugin
    builder.Plugins.AddFromObject(emailPlugin, "email"); // Email Plugin

    var kernel = builder.Build();


    return kernel;
});

// -----------------------------
// 3. Build App
// -----------------------------
var app = builder.Build();

// -----------------------------
// 4. Configure Middleware
// -----------------------------
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "AICO API V1");
        c.RoutePrefix = "swagger";
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
// 5. Endpoint Mapping
// -----------------------------
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=AIRecommend}/{action=Index}/{id?}");

app.Run();
