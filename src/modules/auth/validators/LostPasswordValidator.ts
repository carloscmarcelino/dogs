import * as Yup from 'yup';

export const LostPasswordValidator = Yup.object().shape({
  login: Yup.string().required('Preencha este campo.'),
});
