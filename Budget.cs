using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PresupuestoWeb
{
    public class Budget
    {
        public int Id { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public float Total { get; set; }
        public DateTime Date { get; set; }
        public List<BudgetDetails> Details { get; set; }
    }
}
