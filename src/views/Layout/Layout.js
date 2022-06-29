import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Container } from '@mui/material';

import AppBar from 'components/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Container fixed sx={{ height: '100vh' }}>
        <Outlet />
        <ToastContainer />
      </Container>
    </>
  );
}
