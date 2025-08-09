using aico.core.app.Models;
using Microsoft.Extensions.Options;
using Microsoft.SemanticKernel;
using System.ComponentModel;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace aico.core.app.Plugin
{
    public class EmailPlugin
    {
        private readonly EmailSettings _settings;

        public EmailPlugin(IOptions<EmailSettings> options)
        {
            _settings = options.Value;
        }

        [KernelFunction, Description("Sends a test email to a given recipient.")]
        public async Task<string> SendTestEmail(string to, string subject, string body)
        {
            using var smtpClient = new SmtpClient(_settings.Host)
            {
                Port = _settings.Port,
                Credentials = new NetworkCredential(_settings.Username, _settings.Password),
                EnableSsl = _settings.EnableSsl
            };

            var mailMessage = new MailMessage(_settings.Username, to, subject, body);
       
            try
            {
                await smtpClient.SendMailAsync(mailMessage);
                return $"✅ Email successfully sent to {to}";
            }
            catch (SmtpException smtpEx)
            {
                return $"❌ SMTP Error: {smtpEx.Message}\nStatusCode: {smtpEx.StatusCode}\nDetails: {smtpEx}";
            }
            catch (Exception ex)
            {
                var fullMessage = new StringBuilder();
                fullMessage.AppendLine("❌ General Error:");
                fullMessage.AppendLine(ex.Message);

                // Include inner exception details if available
                if (ex.InnerException != null)
                {
                    fullMessage.AppendLine("➡️ Inner Exception:");
                    fullMessage.AppendLine(ex.InnerException.Message);
                }

                fullMessage.AppendLine("📍 Stack Trace:");
                fullMessage.AppendLine(ex.StackTrace);

                return fullMessage.ToString();
            }
        }
    }
}