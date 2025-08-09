using System.ComponentModel.DataAnnotations;

namespace aico.core.app.Classes
{
    public class DiseasesClass
    {
        [Key]
        public required string Id { get; set; }
        public required string FileName { get; set; }
        public required string Summary { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}