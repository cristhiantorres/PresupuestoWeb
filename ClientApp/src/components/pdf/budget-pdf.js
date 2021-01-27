import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { formatDateString, formatMoney } from 'utils/format-util';
import Logo from 'assets/logo-technical.png';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    fontSize: '12pt'
  },
  header: {
    margin: 10,
    padding: 10,
    marginTop: 25,
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '20pt',
    fontWeight: 'extrabold'
  },
  section: {
    margin: 10,
    padding: 10,
  },
  textHeader: {
    marginTop: 5,
    marginBottom: 3,
    fontSize: 9,
    textTransform: 'uppercase',
    fontWeight: 'extrabold',
    color: '#636363'
  },
  text: {
    fontWeight: 'extralight'
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginHorizontal: 10,
  },
  tableFooter: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    marginHorizontal: 10,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    paddingBottom: 5,
  },
  tableColFooter: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 0,
    paddingBottom: 5,
  },
  tableColInv: {
    width: "25%",
    borderWidth: 0,
  },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
  logo: {
    width: 170,
    height: 150
  },
  info: {
    marginTop: 100,
    marginRight: 20
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  footerContent: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const BudgetPdf = ({ budget }) => {
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src={Logo} style={styles.logo} />
        <View style={styles.info}>
          <Text>Nº {budget.id.toString().padStart(8, '0')}</Text>
          <Text style={styles.text}>{formatDateString(budget.date)}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{budget.customerName}</Text>
        <Text style={styles.textHeader}>Presente</Text>
        <Text style={styles.text}>A continuacion el presupuesto solicitado.</Text>
      </View>
      <View style={styles.table}>
        {/* TableHeader */}
        <View style={styles.tableRow}>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Descripcion</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Precio</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Cantidad</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Total</Text>
            </View>
        </View>
        {/* TableContent */}
        {budget.details.map((item) => (
          <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.description}</Text>
              </View>
              <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{formatMoney(item.price)}</Text>
              </View>
              <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{formatMoney(item.total)}</Text>
              </View>
          </View>
        ))}
      </View>
      <View style={styles.tableFooter}>
        <View style={styles.tableRow}>
          <View style={styles.tableColInv}></View>
          <View style={styles.tableColInv}></View>
          <View style={styles.tableColFooter}>
            <Text style={styles.tableCell}>Total (IVA Incluido)</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{formatMoney(budget.total)}</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View>
            <Text>Guayabo 1511 c/ Antillas.</Text>
            <Text>Lambaré - Paraguay</Text>
          </View>
          <View>
            <Text>+595 991 700 075</Text>
          </View>
          <View>
            <Text>asistencia@technical.com.py</Text>
            <Text>www.technical.com.py</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
  );
};

export default BudgetPdf;
