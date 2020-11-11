import { ContainerApp } from 'components/container';
import { CustomerTable } from 'components/tables';
import { Routes } from 'constant';
import React from 'react';
import { Link } from 'react-router-dom';
import clientes from 'assets/clientes';

const CustomerList = () => {
  return (
    <ContainerApp title="Listado de Clientes">
      <Link className="btn btn-primary btn-sm mb-2" to={Routes.CREATE_CUSTOMER}>Crear</Link>
      <CustomerTable items={clientes} />
    </ContainerApp>
  );
};

export default CustomerList;
