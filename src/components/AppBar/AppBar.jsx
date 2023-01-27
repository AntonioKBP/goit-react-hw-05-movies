import { Nav, NavItem, NavBtn } from './AppBar.styled';

const AppBar = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default AppBar;
