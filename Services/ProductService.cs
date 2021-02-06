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
        SoapService service = new SoapService();
        public List<Product> GetAll()
        {
            try
            {
                Service1SoapClient client = service.GetClient();
                object[] argumentos = new object[3];
                var data = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_CONSULTA_PRODUCTO", argumentos).Any1;
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
