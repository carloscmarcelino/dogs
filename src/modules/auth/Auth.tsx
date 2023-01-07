import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Home } from '../home';

export const Auth = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header handleClick={() => navigate('/login')} />

      <Home />

      <Footer />
    </>
  );
};
