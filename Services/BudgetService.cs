using PresupuestoWeb.Interface;
using PresupuestoWeb.Utils;
using System;
using System.Collections.Generic;
using System.Data;
using TechnicalServiceReference;

namespace PresupuestoWeb.Services
{
    public class BudgetService : IBudgetService
    {
        public int Add(Budget budget)
        {
            try
            {
                Service1SoapClient service = new Service1SoapClient(Service1SoapClient.EndpointConfiguration.Service1Soap,
                                                    "http://15.222.249.125:1501/ws_technical/Service1.asmx");
                object[] argumentos = new object[3];
                argumentos[0] = budget.CustomerId;
                argumentos[1] = budget.Total;
                argumentos[2] = budget.Details;
                var data = service.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_INSERTAR_PRESUPUESTO", argumentos);
                //DataSet dataSet = ConvertUtils.XmlToDataSet(data.InnerXml);
                return 1;
            }
            catch (System.Exception e)
            {
                Console.WriteLine("Error " + e);
                return 0;
            }
        }
    }
}
