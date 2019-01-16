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
    public class ItemInCartController : ControllerBase
    {
        public static List<Item> ItemInCart = new List<Item>
        {

        };
        [HttpGet]
        public ActionResult<IEnumerable<Item>> Get()
        {
            var result = ItemInCart.FindAll(it => it.Count != 0);
            foreach (var item in result)
            {
                item.TotalPrice = item.Count * item.Price;
                if (item.Count > 3)
                {
                    int disc = item.Count / 4;
                    item.Discount = disc * item.Price;
                }
            }
            return result;
        }

        [HttpGet("xx")]
        public ActionResult<int> GetSum()
        {
            var result = ItemInCart.FindAll(it => it.Count != 0);
            int sum = 0;
            foreach (var item in result)
            {
                sum = sum + (item.Count * item.Price);
            }
            return sum;
        }

        [HttpGet("dis")]
        public ActionResult<int> GetDisc()
        {
            var result = ItemInCart.FindAll(it => it.Count != 0);
            int sum = 0;
            int dis = 0;
            foreach (var item in result)
            {
                sum = sum + (item.Count * item.Price);
                dis = dis + item.Discount;
            }
            return sum - dis;
        }

        [HttpPost]
        public void Post(List<Item> value)
        {
            foreach (var item in value)
            {
                ItemInCart.Add(item);
            }
        }

        [HttpDelete]
        public void Delete()
        {
            ItemInCart.RemoveAll(it => true);
        }
    }
}
