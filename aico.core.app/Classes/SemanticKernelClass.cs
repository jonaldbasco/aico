using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Agents;
using Microsoft.SemanticKernel.ChatCompletion;
using OpenAI.Responses;
using System;
using System.ComponentModel;


namespace aico.core.app.Classes
{
    //public class SemanticKernelClass
    //{
    //    public async Task<IActionResult> ProcessRequest(string userInput)
    //    {
    //        // Initialize Semantic Kernel and agents
    //        var kernel = Kernel.CreateBuilder();
    //        // Register skills/plugins for agents
    //        // ...

    //        var coderAgent = new SemanticKernel Agent(kernel, "coder", "You write and review C# code.");
    //        var analystAgent = new Agent(kernel, "analyst", "You analyze code for best practices and efficiency.");

    //        // Orchestrate agent interaction
    //        var result = await coderAgent.InitiateChatAsync(analystAgent, userInput);

    //        return View("Result", result.GetValue<string>());
    //    }
    //}

    //public class EmailPlugin
    //{
    //    private readonly IEmailConnector _connector;

    //    public EmailPlugin(IEmailConnector connector)
    //    {
    //        _connector = connector;
    //    }

    //    [KernelFunction("send_email")]
    //    [Description("Sends an email to the recipient.")]
    //    public async Task<bool> SendEmailAsync(
    //        string recipientEmail,
    //        string subject,
    //        string body)
    //    {
    //        return await _connector.SendEmailAsync(recipientEmail, subject, body);
    //    }

    //    [KernelFunction("get_inbox_count")]
    //    [Description("Returns number of unread emails.")]
    //    public async Task<int> GetInboxCountAsync()
    //    {
    //        return await _connector.GetUnreadCountAsync();
    //    }
    //}


}
