using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using money.api.Models;

namespace money.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MoneyController : ControllerBase
    {
        public static List<Money> Data = new List<Money>
        {

        };
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Money>> Get()
        {
            return Data.ToList();
        }

        // POST api/values
        [HttpPost]
        public void Post(Money value)
        {
            var count = value.Year;
            var loan = value.Loan;
            var inter = value.Interest;
            for (int i = 0; i < count; i++)
            {
                var result = new Money()
                {
                    Loan = loan,
                    Interest = inter,
                    Paid = (loan * inter) / 100,
                    Pay = loan + ((loan * inter) / 100),
                    Year = i + 1
                };
                Data.Add(result);
                loan = result.Pay;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
