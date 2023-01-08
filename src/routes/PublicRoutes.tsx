import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, LostPassword, Register } from '../modules/auth/components';
import { Home } from '../modules/home';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/perdeu" element={<LostPassword />} />
      <Route path="/criar" element={<Register />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
