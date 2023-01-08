import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { CustomButtom, Footer } from '../../../../components';
import { Header } from '../../../../components/Header';
import { TextInput } from '../../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { LostPasswordValidator } from '../../validators/LostPasswordValidator';

const LoginImage = new URL('../../../../assets/Login.jpg', import.meta.url)
  .href;

type LostPasswordOptions = {
  login: string;
};

export const LostPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LostPasswordOptions>({
    defaultValues: {
      login: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    resolver: yupResolver(LostPasswordValidator),
  });

  const navigate = useNavigate();

  const handleLostPassword = (values: LostPasswordOptions): void => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <Flex>
        <Box flex="1">
          <Image src={LoginImage} alt="Login image" />
        </Box>

        <Flex
          as="form"
          onSubmit={handleSubmit(handleLostPassword)}
          w="70%"
          p="0 4rem"
          flexDirection="column"
          mt="10rem"
          gap="1rem 0"
          flex="1"
        >
          <Text color="text" fontSize="2rem">
            Perdeu a senha?
          </Text>

          <TextInput
            register={register('login')}
            label="E-mail/Usuário"
            errors={errors?.login}
          />

          <CustomButtom type="submit" label="Entrar" />
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};
