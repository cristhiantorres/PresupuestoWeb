import { ContainerApp } from 'components/container';
import { Loader } from 'components/elements/status';
import { BudgetTable } from 'components/tables';
import { Routes } from 'constant';
import { useBudgetAll } from 'hooks/budget-hook';
import React from 'react';
import { Link } from 'react-router-dom';

const BudgetList = () => {
  const [data, isLoading] = useBudgetAll();
  return (
    <ContainerApp title="Lista de Presupuestos">
      <Link className="btn btn-primary btn-sm mb-2" to={Routes.CREATE_BUDGET}>Crear</Link>
      {!isLoading && data ? (
        <BudgetTable items={data} />
      ) : (
        <Loader />
      )}
    </ContainerApp>
  );
};

export default BudgetList;
