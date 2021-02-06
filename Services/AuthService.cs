using PresupuestoWeb.Interface;
using TechnicalServiceReference;

namespace PresupuestoWeb.Services
{
    public class AuthService : IAuthService
    {
        SoapService service = new SoapService();
        public int Login(string username, string password)
        {
            object[] argumentos = new object[2];
            argumentos[0] = username;
            argumentos[1] = password;
            Service1SoapClient client = service.GetClient();
            var data = client.f_usuario_login(username, password);
            return int.Parse(data.ToString());
        }
    }
}
