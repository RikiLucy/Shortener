import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainContainer } from './containers';
import { FirstPage, SecondPage } from './pages';

const MainRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <MainContainer>
        <Component {...props} />
      </MainContainer>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <MainRoute path="/:code?" exact component={FirstPage} />
      <MainRoute path="/s/:code?" exact component={SecondPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
