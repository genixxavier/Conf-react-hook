import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppProvider from '../context/AppContext';
//import useInitialState from '../hooks/useInitialState'

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFount from '../containers/NotFount';
import Layout from '../components/Layout';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFount} />
          </Switch>
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
