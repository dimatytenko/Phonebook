import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { authOperations, authSelectors } from './redux/auth';
import Loader from 'components/Loader';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import Layout from './views/Layout';

const HomeView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));
const LoginView = lazy(() => import('views/LoginView'));
const RegisterView = lazy(() => import('views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Suspense fallback={<Loader width={200} height={200} />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}
