import { Flex, Text } from '@chakra-ui/react';
import { DogsSvg } from '../../assets/DogsSvg';

export const Footer = () => {
  return (
    <Flex bg="#fb1" h="12vh" flexDirection="column" alignItems="center" justifyContent="center">
      <DogsSvg mb="1rem" />

      <Text color="764701">Dogs. Alguns direitos reservados.</Text>
    </Flex>
  );
};
