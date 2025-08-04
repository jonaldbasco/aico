using System;
using OpenAI.Responses;
using Microsoft.Extensions.Configuration;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Agents;
using Microsoft.SemanticKernel.ChatCompletion; 

namespace aico.core.app.Classes
{
#pragma warning disable OPENAI001
    public class OpenAIClass
    {
        private readonly IConfiguration _configuration;
        OpenAIResponseClient client;

        public OpenAIClass(IConfiguration configuration) {
            _configuration = configuration;
            client = new(
                model: _configuration["OpenAI:Model"],
                apiKey: _configuration["OpenAI:APIKey"]
            );
        }

        //Text Request
        public OpenAIResponse Send(string text) 
        {
            OpenAIResponse response = client.CreateResponse(text);
            string result = response.GetOutputText();
            return response;
        }

        //Text and Image Request
        public OpenAIResponse send(string text, string image_uri)
        {
            List<ResponseItem> request =
            [
                ResponseItem.CreateUserMessageItem(
                    [
                        ResponseContentPart.CreateInputTextPart(text),
                        ResponseContentPart.CreateInputImagePart(new Uri(image_uri))
                    ]
                )
            ];

            OpenAIResponse response = client.CreateResponse(request);
            return response;
        }

        //Text and (Web Search or File Search)
        public OpenAIResponse send(string text, ResponseCreationOptions options)
        {
            //Web Search Sample
            //ResponseCreationOptions options = new()
            //{
            //    Tools =
            //    {
            //        ResponseTool.CreateWebSearchTool()
            //    },
            //};

            //File Search Sample
            //ResponseCreationOptions options = new()
            //{
            //    Tools =
            //    {
            //        ResponseTool.CreateFileSearchTool(
            //            vectorStoreIds: ["vs_1234567890"],
            //            maxResultCount: 20
            //        )
            //    },
            //};

            OpenAIResponse response = client.CreateResponse(text, options);
            return response;
        }
    }
#pragma warning restore OPENAI001
}
