import React from 'react';
import { Route } from 'react-router';
import { LayoutApp } from 'components/layout';
import { Login } from 'pages/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FetchData } from 'pages/guest';
import { Routes } from 'constant';
import { CustomerCreate, CustomerList } from 'pages/customers';
import './custom.css'

library.add(fab, fas, far);

const App = () => {
  return (
    <LayoutApp>
      <Route exact path='/' component={Login} />
      <Route path='/fetch-data' component={FetchData} />
      <Route path={Routes.CREATE_CUSTOMER} exact component={CustomerCreate} />
      <Route path={Routes.LIST_CUSTOMER} exact component={CustomerList} />
    </LayoutApp>
  );
};

export default App;
