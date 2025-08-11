using aico.core.app.Controllers;
using aico.core.app.Models;
using aico.core.app.Plugin;
using aico.core.app.Services;
using aico.core.app.Sources;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.SemanticKernel;
using System;
using System.Net.Http.Headers;


var builder = WebApplication.CreateBuilder(args);

//Ignore SSL certificate validation for development purposes
builder.Services.AddHttpClient("IgnoreSSL")
    .ConfigurePrimaryHttpMessageHandler(() =>
    {
        return new HttpClientHandler
        {
            ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true
        };
    });

// -----------------------------
// 1. Configure Services
// -----------------------------

builder.WebHost.ConfigureKestrel((context, options) =>
{
    options.Configure(context.Configuration.GetSection("Kestrel"));
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews();

var connectionString = builder.Configuration.GetConnectionString("DatabaseConnection");
builder.Services.AddDbContext<AicoDBContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.Configure<OpenAIConfig>(builder.Configuration.GetSection("OpenAI"));
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("Email"));

//builder.Services.AddHttpClient<OpenAIController>((sp, client) =>
//{
//    var config = sp.GetRequiredService<IOptions<OpenAIConfig>>().Value;
//    client.BaseAddress = new Uri("https://api.openai.com/v1/");
//    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
//});

builder.Services.AddScoped<JsonLoaderService>();
builder.Services.AddSingleton<EmailPlugin>();

// -----------------------------
// 3. Register Kernel
// -----------------------------
builder.Services.AddSingleton<Kernel>(sp =>
{
    var config = sp.GetRequiredService<IOptions<OpenAIConfig>>().Value;
    var emailPlugin = sp.GetRequiredService<EmailPlugin>();

    var kernelBuilder = Kernel.CreateBuilder();

    kernelBuilder.AddOpenAIChatCompletion(
        modelId: config.Model,
        apiKey: config.ApiKey
    );

    kernelBuilder.Plugins.AddFromPromptDirectory("Plugin", "HealthSummarizer");
    kernelBuilder.Plugins.AddFromObject(emailPlugin, "email");

    var kernel = kernelBuilder.Build();

    // Memory is available via DI, not attached directly to kernel
    return kernel;
});

// -----------------------------
// 4. Build App
// -----------------------------
var app = builder.Build();

// This will create the DB if it doesn't exist
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AicoDBContext>();
    db.Database.EnsureCreated();
    Console.WriteLine("SQLite Database created.");
}

// -----------------------------
// 5. Configure Middleware
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
// 6. Endpoint Mapping
// -----------------------------

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{controller=Login}/{action=Index}/{id?}"
//    );

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Login}/{action=Index}/{fileName?}"
);



app.Run();
