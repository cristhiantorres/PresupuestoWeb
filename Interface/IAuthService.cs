using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PresupuestoWeb.Interface
{
    public interface IAuthService
    {
        int Login(string username, string password);
    }
}
