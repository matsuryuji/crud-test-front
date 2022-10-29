import * as yup from 'yup';

export const USER_SCHEMA = yup.object({
  name: yup.string().required('Requer nome'),
  lastName: yup.string().required('Requer sobrenome'),
  phone: yup.string().required('Requer telefone'),
  age: yup.number().required('Requer idade').positive().integer(),
  email: yup.string().email('Email inválido').required('Requer Email'),
});
