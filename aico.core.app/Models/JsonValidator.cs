using System.Text.Json;

namespace aico.core.app.Models
{
    public static class JsonValidator
    {
        public static bool IsValidJson(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return false;

            try
            {
                JsonDocument.Parse(input);
                return true;
            }
            catch (JsonException)
            {
                return false;
            }
        }
    }

    public class AicoFinalJSONResult
    {
        public static object Parse(string rawOutput)
        {
            var trimmedOutput = rawOutput
                .Replace("```json", "")
                .Replace("```", "")
                .Trim();

            return JsonSerializer.Deserialize<object>(trimmedOutput)!;
        }
    }

    public class CreateGUID()
    {
        public static string Generate()
        {
            return Guid.NewGuid().ToString();
        }
    }
}