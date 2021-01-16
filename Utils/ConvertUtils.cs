using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;

namespace PresupuestoWeb.Utils
{
    public class ConvertUtils
    {
        public static DataSet XmlToDataSet(string xml)
        {
            DataSet dataSet = new DataSet();
            StringReader stringReader = new StringReader(xml);
            dataSet.ReadXml(stringReader);
            return dataSet;
        }
    }
}
