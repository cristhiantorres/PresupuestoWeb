import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomerTable = ({ items }) => {
  return (
    <Table bordered size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Documento</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.documento}</td>
            <td>{item.correo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

CustomerTable.propTypes = {
  items: PropTypes.object,
};

export default CustomerTable;
