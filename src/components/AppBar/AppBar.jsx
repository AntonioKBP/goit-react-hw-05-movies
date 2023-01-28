import { Nav, NavItem, NavBtn, NavContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <NavContainer className="container">
      <div>
        <Nav className="main-nav">
          <NavItem to={'/'}>
            <NavBtn type="button">Home</NavBtn>
          </NavItem>
          <NavItem to={'movies'}>
            <NavBtn type="button">Movies</NavBtn>
          </NavItem>
        </Nav>
      </div>
    </NavContainer>
  );
};

export default AppBar;
