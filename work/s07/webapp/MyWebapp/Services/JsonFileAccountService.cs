using System.Collections.Generic;
﻿using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Hosting;
using MyWebapp.Models;

namespace MyWebapp.Services
{
    public class JsonFileAccountService
    {
		    public JsonFileAccountService(IWebHostEnvironment webHostEnvironment)
		    {
			       WebHostEnvironment = webHostEnvironment;
		    }

		    public IWebHostEnvironment WebHostEnvironment { get; }

		    private string JsonFileName
		    {
			       get {
				           return Path.Combine(WebHostEnvironment.ContentRootPath, "..","data", "account.json");
			       }
		    }

		    public IEnumerable<Account> GetAccounts()
		    {
			       using (var jsonFileReader = File.OpenText(JsonFileName))
			       {
				           return JsonSerializer.Deserialize<Account[]>(jsonFileReader.ReadToEnd(), new JsonSerializerOptions{
					                PropertyNameCaseInsensitive = true
				           });
			       }
		    }

        public void SaveAccounts(IEnumerable<Account> accounts)
        {
            string file = "../../../data/account.json";

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

        public bool MakeTransfer(string num1, string num2, int balance){
          var accounts = GetAccounts();
          Account account1 = null;
          Account account2 = null;
          int number1 = Convert.ToInt32(num1);
          foreach (var account in accounts){
            if(account.Number == number1){
              account1 = account;
              break;
            }
          }
          if(account1 == null){
            return false;
          }
          else{
            int number2 = Convert.ToInt32(num2);
            foreach (var account in accounts){
              if(account.Number == number1){
                account2 = account;
                break;
              }
            }
            if(account2 == null){
              return false;
            }
            else{
              if(balance > account1.Balance){
                return false;
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
              }
            }
          }
          return true;
        }



    }
}
