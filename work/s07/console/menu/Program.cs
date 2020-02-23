using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace menu
{
    class Program
    {
        static void Main(string[] args)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = MainMenu();
            }
        }
	private static bool MainMenu()
        {
            //Console.Clear();
            Console.WriteLine("Choose an option:");
            Console.WriteLine("1) View accounts");
            Console.WriteLine("2) View account by number");
            Console.WriteLine("3) Exit");
            Console.Write("\r\nSelect an option: ");

            switch (Console.ReadLine())
            {
                case "1":
                    ViewAccounts();
                    return true;
                case "2":
                    ViewAccountById();
                    return true;
                case "3":
                    return false;
                default:
                    return true;
            }
        }
	private static void ViewAccounts()
        {
	    var accounts = ReadAccounts();
	    foreach (var account in accounts){
                Console.WriteLine(account);
            }
            //Console.Write("Enter the string you want to modify: ");
            //return Console.ReadLine();
        }

        private static void ViewAccountById()
        {
            //Console.Clear();
	    Console.WriteLine("Please enter your number");
	    var number = Console.ReadLine();
	    int data = Convert.ToInt32(number);
	    var accounts = ReadAccounts();
	    foreach (var account in accounts){
		if(account.Number == data){  
                    Console.WriteLine(account);
		}
            }


            //char[] charArray = CaptureInput().ToCharArray();
            //Array.Reverse(charArray);
            //DisplayResult(String.Concat(charArray));
        }

        private static void RemoveWhitespace()
        {
            //Console.Clear();
            Console.WriteLine("Remove Whitespace");

            //DisplayResult(CaptureInput().Replace(" ", ""));
        }

        private static void DisplayResult(string message)
        {
            Console.WriteLine($"\r\nYour modified string is: {message}");
            Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
        }
	static IEnumerable<Account> ReadAccounts()
        {
            String file = "../../../data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                // Console.WriteLine(data);

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                //Console.WriteLine(json[0]);
                return json;
            }
        }
	static void SaveAccounts(IEnumerable<Account> accounts)
        {
            String file = "../data/account.json";

            using (var outputStream = File.OpenWrite(file))
            {
                JsonSerializer.Serialize<IEnumerable<Account>>(
                    new Utf8JsonWriter (
                        outputStream,
                        new JsonWriterOptions {
                            SkipValidation = true,
                            Indented = true
                        }
                    ),
                    accounts
                );
            }
        }

    }
    public class Account
    {
        public int Number { get; set; }
        public int Balance { get; set; }
        public string Label { get; set; }
        public int Owner { get; set; }

        public override string ToString() {
            return JsonSerializer.Serialize<Account>(this);
        }
    }
}
