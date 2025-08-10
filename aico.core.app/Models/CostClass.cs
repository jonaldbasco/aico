namespace aico.core.app.Models
{
    public class CostClass
    {
        public required string Id { get; set; }
        public required string FileName { get; set; }
        public required string Summary { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}