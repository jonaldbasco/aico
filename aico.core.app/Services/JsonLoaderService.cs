namespace aico.core.app.Services
{
    public class JsonLoaderService
    {
        public string LoadJsonInput(string fileName)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Scripts", fileName + ".json");
            return File.ReadAllText(filePath);
        }
    }

}
