using System.Collections.Generic;
using System.Threading.Tasks;

namespace PresupuestoWeb.Interface
{
    public interface ICustomerService
    {
        List<Customer> GetAll();
    }
    
}