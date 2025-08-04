using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace aico.core.app.Sources
{
    public class aicoDBContext : DbContext
    {
        public aicoDBContext(DbContextOptions<aicoDBContext> options)
        : base(options) { }

        public DbSet<Plan> plans { get; set; }
    }

    public class Plan
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public bool Active { get; set; }
    }
    // Prerequisite references
    // Microsoft.EntityFrameworkCore
    // Microsoft.EntityFrameworkCore.SqlServer
    // Microsoft.EntityFrameworkCore.Tools

    // Steps
    // 1 - Create a DBContext Class for your database (aicoDBContext)

    // 2 - Set the connection string in appsettings.json (check the appsettings.json)

    // 3 - Create a class/model of your table

    // 4 - Add the below code before the line of "var app = builder.Build();"
    // var aicoConnectionString = builder.Configuration.GetConnectionString("aicoConnectionString");
    // builder.Services.AddDbContext<aicoDBContext>(options => options.UseSqlServer(aicoConnectionString));

    // 5 - Execute the below script in terminal
    // dotnet ef migrations add AicoMigration
    // dotnet net ef database update

    // Note: if dotnet is not recognized execute the below code before executing the mirgration and update
    // dotnet tool install --global dotnet-ef
}
