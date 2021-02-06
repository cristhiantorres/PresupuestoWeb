using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;
using TechnicalServiceReference;

namespace PresupuestoWeb.Services
{
    public class SoapService
    {
        public Service1SoapClient GetClient()
        {
            var Uri = "http://15.222.249.125:1501/ws_technical/Service1.asmx";

            BasicHttpBinding binding = new BasicHttpBinding();
            EndpointAddress address = new EndpointAddress(Uri);

            binding.Security.Transport.ClientCredentialType = HttpClientCredentialType.Ntlm;
            binding.Security.Transport.ProxyCredentialType = HttpProxyCredentialType.None;

            binding.Security.Mode = BasicHttpSecurityMode.TransportCredentialOnly;

            Service1SoapClient soapClient = new Service1SoapClient(binding, address);

            return soapClient;

        }
    }
}
