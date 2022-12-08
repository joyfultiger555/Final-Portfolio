import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Nav';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Home</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/project1' activeStyle>
            Project 1
          </NavLink>
          <NavLink to='/project2' activeStyle>
            Project 2
          </NavLink>
          <NavLink to='/project3' activeStyle>
            Project 3
          </NavLink>
          <NavLink to='/project4' activeStyle>
            Project 4
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;