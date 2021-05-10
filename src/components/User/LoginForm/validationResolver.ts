import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("E-mail é obrigatório").email("E-mail inválido."),
  password: Yup.string().required("Senha é obrigatória")
});

export const resolver = yupResolver(validationSchema);