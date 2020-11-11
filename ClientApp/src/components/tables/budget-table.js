import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const BudgetTable = ({ items }) => {
  return (
    <Table bordered size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Cliente</th>
          <th>Titulo</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.cliente}</td>
            <td>{item.titulo}</td>
            <td>{item.total}</td>
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
