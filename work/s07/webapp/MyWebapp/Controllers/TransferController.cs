using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using MyWebapp.Models;
using MyWebapp.Services;


namespace MyWebapp.Controllers
{
    //[ApiController]
    public class TransferController : Controller//Base
    {

      public ActionResult transfers(){
        return View();
      }
      public TransferController(JsonFileAccountService accountService){
          AccountService = accountService;
      }
      public JsonFileAccountService AccountService { get; }
      //[HttpPost("api/account/{number}]
      [HttpPost]
      public IActionResult Transfer(IFormCollection collection)
      {
            string source = collection["source"];
            string destination = collection["destination"];
            string amount = collection["amount"];

            if (!string.IsNullOrEmpty(amount))
            {
                int amountInt = Int32.Parse(amount);

                if (AccountService.MakeTransfer(source, destination, amountInt))
                {
                    return View("Success");
                }
                else
                {
                    return View("Unsuccess");
                }
            }
            return View();
        }
    }
}
