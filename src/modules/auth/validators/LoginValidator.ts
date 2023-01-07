import * as Yup from 'yup';

export const LoginValidator = Yup.object().shape({
  login: Yup.string().required('Preencha este campo.'),
  password: Yup.string().required('Preencha este campo.'),
});
