import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { CustomButtom, Footer } from '../../../../components';
import { Header } from '../../../../components/Header';
import { TextInput } from '../../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { RegisterValidator } from '../../validators/RegisterValidator';

const LoginImage = new URL('../../../../assets/Login.jpg', import.meta.url)
  .href;

type RegisterOptions = {
  login: string;
  password: string;
  email: string;
};

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterOptions>({
    defaultValues: {
      login: '',
      password: '',
      email: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    resolver: yupResolver(RegisterValidator),
  });

  const navigate = useNavigate();

  const handleRegister = (values: RegisterOptions): void => {
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
          onSubmit={handleSubmit(handleRegister)}
          w="70%"
          p="0 4rem"
          flexDirection="column"
          mt="10rem"
          gap="1rem 0"
          flex="1"
        >
          <Text color="text" fontSize="2rem">
            Cadastre-se
          </Text>

          <TextInput
            register={register('login')}
            label="Usuário"
            errors={errors?.login}
          />

          <TextInput
            register={register('email')}
            label="E-mail"
            errors={errors?.email}
          />

          <TextInput
            register={register('password')}
            label="Senha"
            type="password"
            errors={errors?.password}
          />

          <CustomButtom type="submit" label="Entrar" />
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};
