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

library.add(fab, fas, far);

const App = () => {
  return (
    <LayoutApp>
      <ToastContainer />
      <Route exact path='/' component={Login} />
      <Route path={Routes.CREATE_CUSTOMER} exact component={CustomerCreate} />
      <Route path={Routes.LIST_CUSTOMER} exact component={CustomerList} />
      <Route path={Routes.LIST_BUDGET} exact component={BudgetList} />
      <Route path={Routes.CREATE_BUDGET} exact component={BudgetCreate} />
      <Route path={Routes.SHOW_BUDGET} component={BudgetShow} />
      <Route path={Routes.BUDGET_PDF} component={BudgetPdfView} />
    </LayoutApp>
  );
};

export default App;
