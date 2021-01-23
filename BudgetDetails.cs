using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PresupuestoWeb
{
    public class BudgetDetails
    {
        public int Id { get; set; }
        public int BudgetId { get; set; }
        public int ProductId { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public string Price { get; set; }
        public float Total { get; set; }
    }
}
