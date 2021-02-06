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
        SoapService service = new SoapService();
        public List<Customer> GetAll()
        {
            try
            {
                Service1SoapClient client = service.GetClient();
                object[] argumentos = new object[3];
                var data = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_CONSULTA_CLIENTE", argumentos).Any1;
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
                            Email = row.ItemArray[5].ToString(),
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