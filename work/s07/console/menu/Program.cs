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
            Console.WriteLine("3) Search account by input");
            Console.WriteLine("4) Transfer money");
            Console.WriteLine("6) Exit");
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
                    SearchAccount();
                    return true;
                case "4":
                    TransferBalance();
                    return true;
                case "6":
                    return false;
                default:
                    return true;
            }
        }
	      private static void ViewAccounts()
        {
	         var accounts = ReadAccounts();
           CreateTableHead();
	         foreach (var account in accounts){
                CreateTableRow(account);
           }
        }

        private static void ViewAccountById()
        {
            //Console.Clear();
	           Console.WriteLine("Please enter your number");
	           var number = Console.ReadLine();
	           int data = Convert.ToInt32(number);
	           var accounts = ReadAccounts();
             CreateTableHead();
	           foreach (var account in accounts){
		             if(account.Number == data){
                    //Console.WriteLine(account);
                    CreateTableRow(account);
		             }
             }
        }
        public static void SearchAccount(){
            Console.Write("Please enter your search string\n");
            string search = Console.ReadLine();
            var accounts = ReadAccounts();
            CreateTableHead();
            if(int.TryParse(search,out int num)){
              foreach (var account in accounts){
                if((account.Number == num) || (account.Owner == num)){
                  CreateTableRow(account);
                }
              }
            }
            else{
              foreach(var account in accounts){
                if(account.Label.Contains(search)){
                  CreateTableRow(account);
                }
              }
            }
        }

        public static void TransferBalance(){
          Console.Write("Please enter the transfer account number\n");
          string num1 = Console.ReadLine();
          int number1 = Convert.ToInt32(num1);
          Account account1 = null;
          Account account2 = null;
          var accounts = ReadAccounts();
          foreach (var account in accounts){
            if(account.Number == number1){
              account1 = account;
              break;
            }
          }
          if(account1 == null){
            Console.Write("Sorry, the account number is not found\n");
          }
          else{
            Console.Write("Please enter the account number you want to transfer to\n");
            string num2 = Console.ReadLine();
            int number2 = Convert.ToInt32(num2);
            foreach (var account in accounts){
              if(account.Number == number1){
                account2 = account;
                break;
              }
            }
            if(account2 == null){
              Console.Write("Sorry, the account number is not found\n");
            }
            else{
              Console.Write("Please enter the transfer amount\n");
              string amount = Console.ReadLine();
              int balance = Convert.ToInt32(amount);
              if(balance > account1.Balance){
                Console.Write("You don't have so much balance\n");
              }
              else{
                foreach (var account in accounts){
                  if(account.Number == number1){
                    account.Balance = account.Balance - balance;
                  }
                  if(account.Number == number2){
                    account.Balance = account.Balance + balance;
                  }
                }
                SaveAccounts(accounts);
                var accountss = ReadAccounts();
                CreateTableHead();
                foreach (var account in accountss){
                     CreateTableRow(account);
                }
              }
            }
          }

        }

        private static void CreateTableHead()
        {
            Console.WriteLine("==========================================================");
            string strNum = "Number";
            string strLabel = "Label";
            string strOwner = "Owner";
            string strBalance = "Balance";

            var tablehead = $"|{strNum.PadRight(13)}|{strBalance.PadRight(13)}|{strLabel.PadRight(13)}|{strOwner.PadRight(13)}|";

            Console.WriteLine(tablehead);
            Console.WriteLine("==========================================================");
            Console.WriteLine();
        }

        private static void CreateTableRow(Account account)
        {
            Console.WriteLine(account.Display());
            Console.WriteLine("==========================================================");
            Console.WriteLine();
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
            String file = "../../../data/account.json";

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
        public string Display()
        {
            return $"|{Number.ToString().PadRight(13)}|{Balance.ToString().PadRight(13)}|{Label.PadRight(13)}|{Owner.ToString().PadRight(13)}|";
        }
    }
}
