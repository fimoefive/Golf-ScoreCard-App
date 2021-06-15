import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/MainPage';
import Games from '../views/Games';
import SingleGame from '../views/SingleGame';
import Holes from '../views/Holes';

function Routes({
  user,
  games,
  setGames,
  holes,
  setHoles
}) {
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
            user={user}
            path='/games/:gameFirebaseKey'
            component={SingleGame}
          />
          <Route
            exact
            path='/holes'
            component={() => <Holes
              user={user}
              holes={holes}
              setHoles={setHoles} />}
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
  holes: PropTypes.array.isRequired,
  setHoles: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
