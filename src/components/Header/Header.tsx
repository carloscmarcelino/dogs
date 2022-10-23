import { Flex, Text } from '@chakra-ui/react';
import { DogsSvg } from '../../assets/DogsSvg';
import { UserSvg } from '../../assets/UserSvg';

export const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-around"
      h="8vh"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
    >
      <DogsSvg />

      <Flex>
        <Text mr="0.5rem">Login/Criar</Text>
        <UserSvg />
      </Flex>
    </Flex>
  );
};
