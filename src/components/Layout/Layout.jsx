import AppBar from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Box>
        <AppBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
