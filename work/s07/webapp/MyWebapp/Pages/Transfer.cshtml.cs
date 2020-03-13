using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using MyWebapp.Models;
using MyWebapp.Services;

namespace MyWebapp.Pages
{
    public class TransferModel : PageModel
    {
        private readonly ILogger<TransferModel> _logger;
        public JsonFileAccountService AccountService;

	      public IEnumerable<Account> Accounts {
            get;
	          private set;
        }

        public TransferModel(ILogger<TransferModel> logger, JsonFileAccountService accountService)
        {
            _logger = logger;
	          AccountService = accountService;
        }

        public void OnGet()
        {
	          Accounts = AccountService.GetAccounts();
        }
    }
}
