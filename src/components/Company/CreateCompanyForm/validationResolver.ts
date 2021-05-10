import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  address: Yup.string().required("Endereço é obrigatório"),
  addressComplement: Yup.string().nullable(),
  addressNumber: Yup.number().typeError("Deve ser apenas números.").required("Número do endereço é obrigatório"),
  state: Yup.string().required("Estado é obrigatório."),
  cnpj: Yup.string().required("CNPJ é obrigatório."),
  inscricao_estadual: Yup.number().required("Inscrição estadual é obrigatória.").typeError("Deve ser apenas números."),
  razao_social: Yup.string().required("Razão social é obrigatório."),
  nome_fantasia: Yup.string().required("Nome fantasia é obrigatório."),
  owner_cpf: Yup.string().required("CPF é obrigatório."),
  owner_name: Yup.string().required("Nome do sócio é obrigatório."),
  phone: Yup.string().required("Telefone é obrigatório.")
});

export const resolver = yupResolver(validationSchema);