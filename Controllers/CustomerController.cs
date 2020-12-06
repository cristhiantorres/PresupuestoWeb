using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PresupuestoWeb.Repository;

namespace PresupuestoWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            DataSet data = CustomerRepository.GetAll();
            List<Customer> customers = new List<Customer>();
            if (data.Tables.Count == 0)
            {
                return customers;
            }

            if (data.Tables[0].Rows.Count == 0)
            {
                return customers;
            }

            foreach (DataRow row in data.Tables[0].Rows)
            {
                Customer customer = new Customer();
                customer.Id = int.Parse(row["CLIE_LLAVE"].ToString());
                customer.FirstName = row["CLIE_NAME"].ToString();
                customer.LastName = row["CLIE_APEL"].ToString();
                customer.DocumentType = row["CLIE_TIPOD"].ToString();
                customer.DocumentNumber = row["CLIE_DOCU"].ToString();
                customer.Email = row["CLIE_MAIL"].ToString();

                customers.Add(customer);
            }

            return customers;
        }
    }
}
