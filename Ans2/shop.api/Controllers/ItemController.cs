using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using shop.api.Models;

namespace shop.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        public static List<Item> Item = new List<Item>{

        };
        [HttpGet]
        public ActionResult<IEnumerable<Item>> Get()
        {
            return Item;
        }

        [HttpPost]
        public void Post(Item value)
        {
            Item.Add(value);
        }
       
    }
}
