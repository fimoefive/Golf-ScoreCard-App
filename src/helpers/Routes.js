import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/MainPage';
import Games from '../views/Games';

function Routes({ user, games, setGames }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route
            exact
            path='/games'
            component={() => <Games
              user={user}
              games={games}
              setGames={setGames} />}
          />
          <Route
            exact
            path='/holes'

            user={user}
          />
          <Route path='*' component={Main} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  games: PropTypes.array.isRequired,
  setGames: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
