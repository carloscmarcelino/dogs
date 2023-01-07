import { Button, ButtonProps, Text } from '@chakra-ui/react';

type CustomButtomProps = {
  label: string;
} & ButtonProps;

export const CustomButtom: React.FC<CustomButtomProps> = ({ label, ...rest }) => {
  return (
    <Button
      colorScheme="#FFBB12"
      bg="#FFBB12"
      borderRadius="10px"
      p="1rem 2rem"
      _hover={{
        filter: 'brightness(1.1)',
      }}
      alignSelf="start"
      {...rest}
    >
      <Text fontSize="1rem" color="#text">
        {label}
      </Text>
    </Button>
  );
};
