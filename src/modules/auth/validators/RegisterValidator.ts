import * as Yup from 'yup';

export const RegisterValidator = Yup.object().shape({
  login: Yup.string().required('Preencha este campo.'),
  email: Yup.string().email('E-mail inválido').required('Preencha este campo.'),
  password: Yup.string().required('Preencha este campo.'),
});
