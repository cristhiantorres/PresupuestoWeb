import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { formatDate, formatMoney } from 'utils/format-util';
import { Link } from 'react-router-dom';

const BudgetTable = ({ items }) => {
  return (
    <Table bordered size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Cliente</th>
          <th>Total</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.customerName}</td>
            <td>{formatMoney(item.total)}</td>
            <td>{formatDate(item.date)}</td>
            <td>
              <Link to={`/presupuestos/ver/${item.id}`}>Ver</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

BudgetTable.propTypes = {
  items: PropTypes.object,
};

export default BudgetTable;
