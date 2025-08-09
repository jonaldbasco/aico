using System.ComponentModel.DataAnnotations;

namespace aico.core.app.Models
{
    public class ProcedureClass
    {
        [Key]
        public required string Id { get; set; }
        public required string FileName { get; set; }
        public required string Summary { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}