using Microsoft.AspNetCore.Mvc;

namespace aico.core.app.Models
{
    public class OpenAIConfig
    {
        public required string ApiKey { get; set; }
        public required string Model { get; set; }
        public required string EmbeddingModel { get; set; }
    }
}
