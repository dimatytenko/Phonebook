import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import AppBar from 'components/AppBar';

export default function Layout() {
  return (
    <Container maxWidth="false">
      <AppBar />
      <Outlet />
    </Container>
  );
}
