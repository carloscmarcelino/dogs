import { Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { DogsSvg } from '../../assets/DogsSvg';
import { UserSvg } from '../../assets/UserSvg';

type HeaderProps = {
  handleClick?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-around"
      h="8vh"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
    >
      <DogsSvg onClick={() => navigate('/')} cursor="pointer" />

      <Flex onClick={handleClick} cursor="pointer">
        <Text mr="0.5rem">Login/Criar</Text>
        <UserSvg />
      </Flex>
    </Flex>
  );
};
