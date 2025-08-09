using aico.core.app.Classes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace aico.core.app.Sources
{
    // https://sqlitebrowser.org/dl/ to download SQLite Browser
    // 5 - Execute the below script in terminal

    // dotnet tool install --global dotnet-ef
    // dotnet ef migrations add HealthSummaryClass
    // dotnet ef migrations add DiseasesClass
    // dotnet ef database update
    // dotnet ef migrations list

    public class AicoDBContext(DbContextOptions<AicoDBContext> options) : DbContext(options)
    {
        public DbSet<HealthSummaryClass> HealthSummaryClass { get; set; }
        public DbSet<DiseasesClass> DiseasesClass { get; set; }
    }
}

