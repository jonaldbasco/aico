﻿namespace aico.core.app.Classes
{
    public class EmailSettings
    {
        public required string Host { get; set; }
        public int Port { get; set; }
        public bool EnableSsl { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
    }

}
