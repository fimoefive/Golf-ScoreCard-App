import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/games">Player</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/holes">Games</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/messages">Messages</Link>
      </NavItem>
    </>
  );

  return (
    <>
      <div>
        <Navbar className="navBar" color="gray" light expand="md">
          <Link className="navbar-brand" to="/">Main</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {user && authenticated()}
              {user !== null
                && <NavItem className="authButtons">
                  {user
                    ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                    : <Button color='info' onClick={signInUser}>Sign In</Button>
                  }
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
