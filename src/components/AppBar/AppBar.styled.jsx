import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  margin-right: 10px;
  padding: 10px;
`;

export const NavBtn = styled.button`
  background-color: #0078d0;
  border: 0;
  border-radius: 56px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 600;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    background-color: initial;
    background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
    border-radius: 125px;
    content: '';
    height: 50%;
    left: 4%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    transition: all 0.3s;
    width: 92%;
  }

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .button-71 {
      padding: 16px 48px;
    }
  }
`;
