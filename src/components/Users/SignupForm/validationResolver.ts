import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório'), 

  email: Yup.string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido.'), 

  phone: Yup.string()
    .required('Telefone é obrigatório.'),

  password: Yup.string()
    .required('Senha é obrigatória.'),
    
  passwordConfirmation: Yup.string()
    .required('Confirmação de senha é obrigatória.')
    .oneOf([Yup.ref('password'), null], 'Senhas não conferem.')
});

export const resolver = yupResolver(validationSchema);