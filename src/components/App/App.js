import { Route, Switch } from 'react-router-dom';

import { ROUTE_PATHS } from 'services/route-paths';
import {
  BankSettingsView,
  CalculatorView,
  ContactsView,
  NotFoundView,
} from 'views';
import { AppBar, Footer } from 'components';

const App = () => {
  return (
    <>
      <AppBar />

      <Switch>
        <Route path={ROUTE_PATHS._()} exact component={CalculatorView} />
        <Route path="/bank-settings" component={BankSettingsView} />
        <Route path="/calculator" component={CalculatorView} />
        <Route path="/contacts" component={ContactsView} />
        <Route component={NotFoundView} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
