using PresupuestoWeb.Interface;
using PresupuestoWeb.Utils;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TechnicalServiceReference;

namespace PresupuestoWeb.Services
{
    public class ProductService : IProductService
    {
        public List<Product> GetAll()
        {
            try
            {
                Service1SoapClient service = new Service1SoapClient(Service1SoapClient.EndpointConfiguration.Service1Soap,
                                                    "http://15.222.249.125:1501/ws_technical/Service1.asmx");
                object[] argumentos = new object[3];
                var data = service.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_CONSULTA_PRODUCTO", argumentos).Any1;
                DataSet dataSet = ConvertUtils.XmlToDataSet(data.InnerXml);
                List<Product> Products = new List<Product>();
                if (dataSet.Tables.Count > 0)
                {
                    foreach (DataRow row in dataSet.Tables[0].Rows)
                    {
                        Product Product = new Product
                        {
                            Id = Convert.ToInt32(row.ItemArray[0].ToString()),
                            Name = row.ItemArray[1].ToString(),
                            Cost = Convert.ToDouble(row.ItemArray[2].ToString()),
                            Price = Convert.ToDouble(row.ItemArray[3].ToString()),
                            Stock = Convert.ToInt32(row.ItemArray[4].ToString()),
                        };
                        Products.Add(Product);
                    }
                }
                return Products;
            }
            catch (System.Exception e)
            {
                Console.WriteLine("Error " + e);
                return new List<Product>();
            }
        }
    }
}
