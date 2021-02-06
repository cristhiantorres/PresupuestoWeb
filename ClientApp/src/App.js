import React from 'react';
import { Route } from 'react-router';
import { LayoutApp } from 'components/layout';
import { Login } from 'pages/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Routes } from 'constant';
import { CustomerCreate, CustomerList } from 'pages/customers';
import 'custom.css';
import { BudgetCreate, BudgetList, BudgetPdfView, BudgetShow } from 'pages/budgets';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthRoute, ProtectedRoute } from 'routes';

library.add(fab, fas, far);

const App = () => {
  return (
    <LayoutApp>
      <ToastContainer />
      <AuthRoute exact path='/' component={Login} />
      <ProtectedRoute path={Routes.CREATE_CUSTOMER} exact component={CustomerCreate} />
      <ProtectedRoute path={Routes.LIST_CUSTOMER} exact component={CustomerList} />
      <ProtectedRoute path={Routes.LIST_BUDGET} exact component={BudgetList} />
      <ProtectedRoute path={Routes.CREATE_BUDGET} exact component={BudgetCreate} />
      <ProtectedRoute path={Routes.SHOW_BUDGET} component={BudgetShow} />
      <ProtectedRoute path={Routes.BUDGET_PDF} component={BudgetPdfView} />
    </LayoutApp>
  );
};

export default App;
