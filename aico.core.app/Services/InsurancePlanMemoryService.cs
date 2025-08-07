using Microsoft.SemanticKernel.Memory;
using System.Text.Json.Nodes;

namespace aico.core.app.Services
{
    public class MaxicareMemoryHandler
    {
#pragma warning disable SKEXP0001
        private readonly ISemanticTextMemory _memory;

        private const string CollectionName = "maxicare-plans";

        public MaxicareMemoryHandler(ISemanticTextMemory memory)
        {
            _memory = memory;
        }
#pragma warning restore SKEXP0001

        public async Task StorePlanAsync(string jsonInput)
        {
            var plans = (JsonNode.Parse(jsonInput)?.AsArray()) ?? throw new ArgumentException("Input must be a JSON array of plans");
            
            foreach (var planNode in plans)
            {
                var planObj = planNode?.AsObject();
                if (planObj == null || !planObj.ContainsKey("Plan"))
                    continue; // Skip invalid entries

                string planId = planObj["Plan"]?.ToString() ?? Guid.NewGuid().ToString();

                var summaryParts = planObj
                    .Where(kvp => kvp.Key != "Plan")
                    .Select(kvp => $"{kvp.Key}: {kvp.Value?.ToString()}");

                string summary = string.Join("; ", summaryParts);

                await _memory.SaveInformationAsync(
                    CollectionName,
                    planObj.ToJsonString(),
                    planId,
                    summary);

                Console.WriteLine($"Stored plan {planId} in memory.");
            }
        }
    }
}