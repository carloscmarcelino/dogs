import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { Feed } from './components/Feed/Feed';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header handleClick={() => navigate('/login')} />
      <Feed />
      <Footer />
    </>
  );
};
