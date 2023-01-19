import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Nav } from './AppBar.styled';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: yellow;

  &.active {
    background-color: 'blue';
    color: 'white';
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: 'green';
  }
`;

const AppBar = () => {
  return (
    <div className="container">
      <div>
        <Nav className="main-nav">
          <NavItem to={'/'}>
            <button type="button">Home</button>
          </NavItem>
          <NavItem to={'movies'}>
            <button type="button">Movies</button>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default AppBar;
