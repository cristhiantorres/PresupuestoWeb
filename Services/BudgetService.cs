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
        SoapService service = new SoapService();
        public int Add(Budget budget)
        {
            try
            {
                Service1SoapClient client = service.GetClient();
                object[] argumentos = new object[2];
                argumentos[0] = budget.CustomerId;
                argumentos[1] = budget.Total;
                var data = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_INSERTAR_PRESUPUESTO", argumentos).Any1;
                DataSet dataSet = ConvertUtils.XmlToDataSet(data.InnerXml);
                int budgetId = 0;
                if (dataSet.Tables.Count > 0)
                {
                    DataRow row = dataSet.Tables[0].Rows[0];
                    Budget budget1 = new Budget
                    {
                        Id = Convert.ToInt32(row.ItemArray[0].ToString()),
                        CustomerId = row.ItemArray[1].ToString(),
                        Total = Convert.ToInt32(row.ItemArray[2].ToString()),
                        Date = Convert.ToDateTime(row.ItemArray[3]),
                    };
                    budgetId = budget1.Id;
                }

                if (budgetId > 0)
                {
                    // Insertamos los detalles
                    foreach (var item in budget.Details)
                    {
                        object[] argumentosD = new object[6];
                        argumentosD[0] = budgetId;
                        argumentosD[1] = item.ProductId;
                        argumentosD[2] = item.Description;
                        argumentosD[3] = item.Quantity;
                        argumentosD[4] = item.Price;
                        argumentosD[5] = item.Total;
                        var dataD = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_INS_PRESUPUESTO_DETALLE", argumentosD).Any1;
                        DataSet dataSetD = ConvertUtils.XmlToDataSet(dataD.InnerXml);
                    }
                    return budgetId;
                }
                return 0;
            }
            catch (System.Exception e)
            {
                Console.WriteLine("Error " + e);
                return 0;
            }
        }

        public Budget GetById(int id)
        {
            try
            {
                Service1SoapClient client = service.GetClient();
                object[] argumentos = new object[1];
                argumentos[0] = id;
                var data = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_PRESUPUESTO_POR_ID", argumentos).Any1;
                DataSet dataSet = ConvertUtils.XmlToDataSet(data.InnerXml);

                if (dataSet.Tables.Count > 0)
                {
                    // Cabecera
                    DataRow row = dataSet.Tables[0].Rows[0];
                    Budget budget = new Budget
                    {
                        Id = Convert.ToInt32(row.ItemArray[0].ToString()),
                        CustomerId = row.ItemArray[1].ToString(),
                        Total = Convert.ToInt32(row.ItemArray[2].ToString()),
                        Date = Convert.ToDateTime(row.ItemArray[3]),
                        CustomerName = row.ItemArray[4].ToString(),
                        CustomerEmail = row.ItemArray[5].ToString(),
                    };


                    // Detalles
                    object[] argumentosD = new object[1];
                    argumentos[0] = budget.Id;
                    var dataD = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_PRESUPUESTO_DETALLES", argumentos).Any1;
                    DataSet dataSetD = ConvertUtils.XmlToDataSet(dataD.InnerXml);
                    List<BudgetDetails> details = new List<BudgetDetails>();
                    foreach (DataRow item in dataSetD.Tables[0].Rows)
                    {
                        BudgetDetails detail = new BudgetDetails();
                        detail.Id = int.Parse(item.ItemArray[0].ToString());
                        detail.ProductId = int.Parse(item.ItemArray[1].ToString());
                        detail.Description = item.ItemArray[2].ToString();
                        detail.Quantity = int.Parse(item.ItemArray[3].ToString());
                        detail.Price = item.ItemArray[4].ToString();
                        detail.Total = int.Parse(item.ItemArray[5].ToString());
                        details.Add(detail);
                    }
                    budget.Details = details;
                    return budget;
                }
                return new Budget();
            }
            catch (System.Exception e)
            {
                Console.WriteLine("Error " + e);
                return new Budget();
            }
        }

        public List<Budget> GetAll()
        {
            try
            {
                Service1SoapClient client = service.GetClient();
                object[] argumentos = new object[1];
                var data = client.DTcallProcedure("TECHNICAL.PKG_PRESUPUESTO.SP_CONSULTA_PRESUPUESTO", argumentos).Any1;
                DataSet dataSet = ConvertUtils.XmlToDataSet(data.InnerXml);
                if (dataSet.Tables.Count > 0)
                {
                    List<Budget> budgets = new List<Budget>();
                    foreach (DataRow row in dataSet.Tables[0].Rows)
                    {
                        Budget budget = new Budget
                        {
                            Id = Convert.ToInt32(row.ItemArray[0].ToString()),
                            CustomerId = row.ItemArray[1].ToString(),
                            Total = Convert.ToInt32(row.ItemArray[2].ToString()),
                            Date = Convert.ToDateTime(row.ItemArray[3]),
                            CustomerName = row.ItemArray[4].ToString(),
                        };

                        budgets.Add(budget);
                    }
                    return budgets;
                }

                return new List<Budget>();
            }
            catch (Exception e)
            {

                Console.WriteLine("Error " + e);
                return new List<Budget>();
            }
        }
    }      
}
