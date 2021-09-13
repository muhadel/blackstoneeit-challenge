// pkgs:
import { Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// utils:
import './common/styles/app.sass';

// comps:
import Layout from './components/distributed/layout/layout.comp';

// views/pages:
import ReportsPage from './views/reports/reports.page';
import NotFound from './views/not-found/notfound.page';
import React from 'react';

// component>>>
const App = () => (
  <ChakraProvider>
    <Switch>
      <Route exact path="/">
        <Layout expanded>
          <ReportsPage />
        </Layout>
      </Route>

      {/* 404 */}
      <Route path="*">
        <Layout expanded>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  </ChakraProvider>
);

export default App;
