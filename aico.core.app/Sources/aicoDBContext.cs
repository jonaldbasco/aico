using aico.core.app.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace aico.core.app.Sources
{
    // https://sqlitebrowser.org/dl/ to download SQLite Browser
    // 5 - Execute the below script in terminal

    // dotnet tool install --global dotnet-ef
    // dotnet ef migrations add BasicProfileClass
    // dotnet ef migrations add HealthSummaryClass
    // dotnet ef migrations add DiseasesClass
    // dotnet ef migrations add IsCoveredClass
    // dotnet ef migrations add ProcedureClass
    // dotnet ef migrations add CostClass
    // dotnet ef database update
    // dotnet ef migrations list

    public class AicoDBContext(DbContextOptions<AicoDBContext> options) : DbContext(options)
    {
        public DbSet<BasicProfileClass> BasicProfileClass { get; set; }
        public DbSet<HealthSummaryClass> HealthSummaryClass { get; set; }
        public DbSet<DiseasesClass> DiseasesClass { get; set; }
        public DbSet<IsCoveredClass> IsCoveredClass { get; set; }
        public DbSet<ProcedureClass> ProcedureClass { get; set; }
        public DbSet<CostClass> CostClass { get; set; }

    }

}

