using System.Collections.Generic;
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

		public IWebHostEnvironment WebHostEnvironment 
		{
			get;
		}

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
		public IEnumerable<Account> GetOneAccount(int number)
		{
			using (var jsonFileReader = File.OpenText(JsonFileName))
			{
				Account[] account= JsonSerializer.Deserialize<Account[]>(jsonFileReader.ReadToEnd(), new JsonSerializerOptions{
					PropertyNameCaseInsensitive = true
				});
				for (int i = 0; i < 4; i++){
					if (account[i].Number == number){
						return JsonSerializer.Deserialize<Account[]>(account[i]);
					}
				}
				return ErrorEventArgs;
			
			}
		}
    }
}
