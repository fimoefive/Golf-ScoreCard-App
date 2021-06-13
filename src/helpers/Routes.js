import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';


PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ user }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/games'
            user={user}
          />
          <Route
            exact
            path='/holes'
            user={user}
          />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};

export default Routes;
