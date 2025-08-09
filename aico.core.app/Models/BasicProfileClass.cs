using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class BasicProfileClass
{
    [Key]
    public required string Id { get; set; }
    public required string FileName { get; set; }
    public required string Summary { get; set; }
    public DateTime CreatedAt { get; set; }
}