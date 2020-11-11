import { ContainerApp } from 'components/container';
import { BudgetTable } from 'components/tables';
import { Routes } from 'constant';
import React from 'react';
import { Link } from 'react-router-dom';

const BudgetList = () => {
  return (
    <ContainerApp title="Lista de Presupuestos">
      <Link className="btn btn-primary btn-sm mb-2" to={Routes.CREATE_BUDGET}>Crear</Link>
      <BudgetTable items={[]} />
    </ContainerApp>
  );
};

export default BudgetList;
