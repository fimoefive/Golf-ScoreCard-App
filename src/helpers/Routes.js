import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/MainPage';
import Games from '../views/Games';
import SingleGame from '../views/SingleGame';
import Holes from '../views/Holes';
import SingleHole from '../views/SingleHole';

function Routes({
  user,
  games,
  setGames,
  holes,
  setHoles,
  total,
  setTotal
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
              // user={user}
              holes={holes}
              setHoles={setHoles}
              total={total}
              setTotal={setTotal}
            />}
          />
          <Route
            user={user}
            path='/holes/:firebaseKey'
            component={SingleHole}
          />
          <Route path='*' component={Main} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  games: PropTypes.array,
  setGames: PropTypes.func,
  holes: PropTypes.array,
  setHoles: PropTypes.func,
  total: PropTypes.array,
  setTotal: PropTypes.func,
  user: PropTypes.any
};

export default Routes;
