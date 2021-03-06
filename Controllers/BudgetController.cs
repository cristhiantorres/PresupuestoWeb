﻿using System;
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
    public class BudgetController : ControllerBase
    {
        private readonly ILogger<BudgetController> _logger;
        IBudgetService budgetService;
        public BudgetController(ILogger<BudgetController> logger, IBudgetService _budgetService)
        {
            budgetService = _budgetService;
            _logger = logger;
        }

        // POST: /budget/add
        [HttpPost]
        public int Add(Budget budget)
        {          
            int budgetId = budgetService.Add(budget); 
            return budgetId;
        }

        // GET: /budget/5
        [HttpGet("{id}")]
        public Budget Get(int id)
        {
            return budgetService.GetById(id);
        }

        // GET: /budget
        [HttpGet]
        public List<Budget> Get()
        {
            return budgetService.GetAll();
        }
    }
}
