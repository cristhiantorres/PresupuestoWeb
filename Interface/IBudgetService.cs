using System.Collections.Generic;
using System.Threading.Tasks;

namespace PresupuestoWeb.Interface
{
    public interface IBudgetService
    {
        int Add(Budget budget);
        Budget GetById(int id);
        List<Budget> GetAll();
    }
    
}