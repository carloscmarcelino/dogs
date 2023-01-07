import { Route, Routes } from 'react-router-dom';
import { Auth } from '../modules/auth';
import { Login, LostPassword, Register } from '../modules/auth/components';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Auth />} />

      <Route path="/login" element={<Login />} />

      <Route path="/perdeu" element={<LostPassword />} />

      <Route path="/criar" element={<Register />} />
    </Routes>
  );
};
