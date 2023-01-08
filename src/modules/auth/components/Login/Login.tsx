import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { CustomButtom, Footer } from '../../../../components';
import { Header } from '../../../../components/Header';
import { TextInput } from '../../../../components/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidator } from '../../validators/LoginValidator';
import { useNavigate } from 'react-router-dom';

const LoginImage = new URL('../../../../assets/Login.jpg', import.meta.url)
  .href;

type LoginOptions = {
  login: string;
  password: string;
};

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginOptions>({
    defaultValues: {
      login: '',
      password: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    resolver: yupResolver(LoginValidator),
  });

  const navigate = useNavigate();

  const handleLogin = (values: LoginOptions): void => {
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

        <Flex direction="column" flex="1">
          <Flex
            as="form"
            onSubmit={handleSubmit(handleLogin)}
            w="70%"
            p="0 4rem"
            flexDirection="column"
            mt="10rem"
            gap="1rem 0"
          >
            <Text color="text" fontSize="2rem">
              Login
            </Text>

            <TextInput
              register={register('login')}
              label="Usuário"
              errors={errors?.login}
            />

            <TextInput
              register={register('password')}
              label="Senha"
              type="password"
              errors={errors?.password}
            />

            <CustomButtom type="submit" label="Entrar" />
          </Flex>

          <Text
            m="3rem 4rem"
            color="text"
            fontSize="1rem"
            borderBottom="2px solid black"
            w="fit-content"
            onClick={() => navigate('/perdeu')}
          >
            Perdeu a senha?
          </Text>

          <Flex m="0rem 4rem" flexDirection="column" gap="1rem 0">
            <Text mb="1rem" color="text" fontSize="2rem">
              Cadastre-se
            </Text>

            <Text color="text" fontSize="1rem">
              Ainda não possui conta? Cadastre-se no site.
            </Text>

            <CustomButtom
              onClick={() => navigate('/criar')}
              mt="1rem"
              label="Cadastro"
            />
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};
