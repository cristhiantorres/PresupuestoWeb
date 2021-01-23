using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PresupuestoWeb.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PresupuestoWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        IProductService productService;
        public ProductController(ILogger<ProductController> logger, IProductService _productService)
        {
            productService = _productService;
            _logger = logger;
        }

        [HttpGet]
        public List<Product> GetAll()
        {
            List<Product> products = productService.GetAll();
            return products;
        }
    }
}
