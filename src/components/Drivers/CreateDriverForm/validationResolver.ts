import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  cpf: Yup.string().required('CPF é obrigatório')
});

export const resolver = yupResolver(validationSchema);