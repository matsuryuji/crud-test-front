import * as yup from 'yup';

export const USER_SCHEMA = yup.object({
  nome: yup.string().required('Requer nome'),
  cpf: yup.string().required('Requer CPF'),
  telefone: yup.string().required('Requer telefone'),
  placaCarro: yup.string().required('Requer Placa do carro'),
  email: yup.string().email('Email inválido').required('Requer Email'),
});
