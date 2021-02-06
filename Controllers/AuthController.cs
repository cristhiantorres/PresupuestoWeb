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
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        IAuthService authService;
        public AuthController(ILogger<AuthController> logger, IAuthService _authService)
        {
            authService = _authService;
            _logger = logger;
        }

        [HttpPost]
        public int Login(Auth auth)
        { 
            return authService.Login(auth.Username, auth.Password);
        }
    }
}
