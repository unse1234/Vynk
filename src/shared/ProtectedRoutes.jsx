import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../features/auth/authStore.js';

const ProtectedRoutes = () => {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
