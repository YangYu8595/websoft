using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyWebapp.Models;
using MyWebapp.Services;

namespace MyWebapp.Controllers
{
    [ApiController]
    //[Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        public AccountsController(JsonFileAccountService accountService){
            AccountService = accountService;
        }
        public JsonFileAccountService AccountService { get; }
        [HttpGet("api/accounts")]
        public IActionResult Get()
        {
	           return Ok(AccountService.GetAccounts());
        }
        [HttpGet("api/account/{number}")]
	      public IActionResult Get(string number)
	      {
             int id = int.Parse(number);
             IEnumerable<Account> accounts = AccountService.GetAccounts();
             foreach(Account account in accounts){
               if(account.Number == id){
                 return Ok(account);
               }
             }
             return NotFound(new { Error = "Account number " + number + " is not found" });
        }
    }
}
