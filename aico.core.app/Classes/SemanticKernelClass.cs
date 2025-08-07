using Microsoft.AspNetCore.Mvc;
using System;
using OpenAI.Responses;
using Microsoft.Extensions.Configuration;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Agents;
using Microsoft.SemanticKernel.ChatCompletion;

namespace aico.core.app.Classes
{
    public class SemanticKernelClass
    {
       // private readonly IConfiguration _configuration;

        // Initialize Semantic Kernel and agents

        //public class ProcessRequest(string userInput)
        //{

        //    private static kernel = Kernel.CreateBuilder()
        //                    .AddOpenAIChatCompletion("OpenAI:Model", "OpenAI:APIKey") // Or other LLM service
        //                    .Build();
        //    // Register skills/plugins for agents
        //    ChatCompletionAgent researchAgent = new()
        //    {
        //        Instructions = "You are a research assistant. Your task is to find information on a given topic using available tools and summarize the findings.",
        //        Name = "ResearchAgent",
        //        Kernel = kernel
        //    };

        //    ChatCompletionAgent writerAgent = new()
        //    {
        //        Instructions = "You are a content writer. Your task is to write articles based on the research provided by the ResearchAgent.",
        //        Name = "WriterAgent",
        //        Kernel = kernel
        //    };

        //    //kernel.ImportPluginFromObject(new SearchPlugin(), "SearchPlugin");
        //    //researchAgent.AddPlugin(kernel.Plugins["SearchPlugin"]);

        //    //// Orchestrate agent interaction
        //    //var result = await coderAgent.InitiateChatAsync(analystAgent, userInput);

        //    //return View("Result", result.GetValue<string>());

        //    var result ="";

        //    return writerAgent.Name;
        //}
    }
}
