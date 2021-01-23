using System.Collections.Generic;
using System.Threading.Tasks;

namespace PresupuestoWeb.Interface
{
    public interface IProductService
    {
        List<Product> GetAll();
    }
    
}