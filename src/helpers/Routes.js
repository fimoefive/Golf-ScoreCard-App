import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/MainPage';
import Games from '../views/Games';
import Holes from '../views/Holes';
import SingleHole from '../views/SingleHole';
import Messages from '../views/Messages';

function Routes({
  user,
  holes,
  setHoles,
  messages,
  setMessages,
  loggedInUser
}) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route
            exact
            path='/games'
            user={user}
            component={() => (<Games
              user={user}
            />)}
          />
          <Route
            exact
            path='/holes'
            user={user}
            component={() => <Holes
              user={user}
              holes={holes}
              setHoles={setHoles}
            />}
          />
          <Route
            user={user}
            path='/holes/:firebaseKey'
            component={() => <SingleHole user={user} />}
          />
          <Route
            exact
            path='/messages'
            component={() => <Messages
              user={user}
              messages={messages}
              setMessages={setMessages}
              loggedInUser={loggedInUser}
            />}
          />

          <Route path='*' component={Main} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  holes: PropTypes.array,
  setHoles: PropTypes.func,
  messages: PropTypes.array,
  setMessages: PropTypes.func,
  loggedInUser: PropTypes.object.isRequired
};

export default Routes;
