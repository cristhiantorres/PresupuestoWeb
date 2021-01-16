using System;
using System.Collections.Generic;
using System.Data;
using System.ServiceModel;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.Extensions.Configuration;
using Oracle.ManagedDataAccess.Client;
using PresupuestoWeb.Interface;
using TechnicalServiceReference;
using PresupuestoWeb.Utils;

namespace PresupuestoWeb.Services
{
    public class CustomerService : ICustomerService
    {
        public List<Customer> GetById(string id)
        {
            try
            {
                Service1SoapClient service = new Service1SoapClient(Service1SoapClient.EndpointConfiguration.Service1Soap,
                                                    "http://15.222.249.125:1501/ws_technical/Service1.asmx");
                object[] argumentos = new object[3];
                argumentos[0] = id;
                var data = service.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_CONSULTA_CLIENTE", argumentos).Any1;
                DataSet dataSet = ConvertUtils.XmlToDataSet(data.InnerXml);
                List<Customer> customers = new List<Customer>();
                if (dataSet.Tables.Count > 0)
                {
                    foreach (DataRow row in dataSet.Tables[0].Rows)
                    {
                        Customer customer = new Customer
                        {
                            Id = Convert.ToInt32(row.ItemArray[0].ToString()),
                            DocumentType = row.ItemArray[1].ToString(),
                            DocumentNumber = row.ItemArray[2].ToString(),
                            FirstName = row.ItemArray[3].ToString(),
                            LastName = row.ItemArray[4].ToString(),
                            Email = row.ItemArray[7].ToString(),
                        };
                        customers.Add(customer);
                    }
                }
                return customers;
            }
            catch (System.Exception e)
            {
                Console.WriteLine("Error " + e);
                return new List<Customer>();
            }
        }
    }
}