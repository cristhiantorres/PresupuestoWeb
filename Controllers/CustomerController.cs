using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PresupuestoWeb.Interface;

namespace PresupuestoWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;
        ICustomerService customerService;
        public CustomerController(ILogger<CustomerController> logger, ICustomerService _customerService)
        {
            customerService = _customerService;
            _logger = logger;
        }

        [HttpGet]
        public List<Customer> GetAll()
        {          
            List<Customer> customers = customerService.GetAll(); 
            return customers;
        }
    }
}
