using Oracle.ManagedDataAccess.Client;

namespace PresupuestoWeb.Repository
{
    public class Connection
    {
        private static string connectionString = "Data Source=db;User Id=technical;Password=12345678;";
        
        private static OracleConnection DBConfig()
        {
            OracleConfiguration.OracleDataSources.Add("db", "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=15.222.249.125)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(SERVER=DEDICATED)))");
            // Set default statement cache size to be used by all connections.
            OracleConfiguration.StatementCacheSize = 25;

            // Disable self tuning by default.
            OracleConfiguration.SelfTuning = false;

            // Bind all parameters by name.
            OracleConfiguration.BindByName = true;

            // Set default timeout to 60 seconds.
            OracleConfiguration.CommandTimeout = 60;

            // Set default fetch size as 1 MB.
            OracleConfiguration.FetchSize = 1024 * 1024;

            // Set network properties
            OracleConfiguration.SendBufferSize = 8192;
            OracleConfiguration.ReceiveBufferSize = 8192;
            OracleConfiguration.DisableOOB = true;

            OracleConnection connection = null;
            return connection;
        }

        public static OracleConnection GetConnection()
        {
            OracleConnection connection = DBConfig();
            connection = new OracleConnection(connectionString);
            return connection;
        }
    }
}