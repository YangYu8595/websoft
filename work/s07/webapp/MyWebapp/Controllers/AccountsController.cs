using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyWebapp.Models;
using MyWebapp.Services;

namespace MyWebapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        public AccountsController(JsonFileAccountService accountService){
            AccountService = accountService;
        }
	
    

        public JsonFileAccountService AccountService { get; }

        [HttpGet]
        public IEnumerable<Account> Get()
        {
	        return AccountService.GetAccounts();
        }
	public IEnumerable<Account> Get(int id)
	{
                return AccountService.GetOneAccount(id);
        }

    }

}
