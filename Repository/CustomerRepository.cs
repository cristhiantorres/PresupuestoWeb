using System.Data;
using Oracle.ManagedDataAccess.Client;

namespace PresupuestoWeb.Repository
{
    public class CustomerRepository
    {
        public static DataSet GetAll()
        {
            OracleConnection connection = Connection.GetConnection();
            DataSet data = new DataSet();
            OracleCommand command = connection.CreateCommand();
            try
            {
                connection.Open();
                command.CommandText = "SELECT * FROM CLIENTE";
                OracleDataAdapter adapter = new OracleDataAdapter(command);
                adapter.Fill(data);
                connection.Close();
                return data;
            }
            catch (System.Exception e)
            {
                connection.Close();
                return data;
            }
        }
    }
}