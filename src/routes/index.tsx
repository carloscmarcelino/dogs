import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
  const user = false;

  return user ? <ProtectedRoutes /> : <PublicRoutes />;
};
