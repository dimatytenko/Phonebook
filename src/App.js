import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AppBar from './components/AppBar';
import Container from 'components/Container';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </Container>
  );
}
