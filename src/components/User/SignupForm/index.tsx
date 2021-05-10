import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { User } from "models";
import { useSignup } from "hooks/session";
import { Input, OrangeButton } from "components/_shared";
import { resolver } from "./validationResolver";
import { useStyles } from "./styles";

type FormFields = User.FormFields.SignUp;

export const SignupForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({ resolver });
  const { isLoading, signUp } = useSignup();
  const styles = useStyles();

  const handleSignup = useCallback(async (data: FormFields) => {
    await signUp(data)
  }, [signUp]);

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(handleSignup)}>
      <Input
        {...register("name")}
        name="name"
        label="Nome"
        placeholder="Insira seu nome"
        errors={errors}
        loading={isLoading}
      />

      <Input
        {...register("phone")}
        name="phone"
        label="Telefone/WhatsApp"
        type="phone"
        placeholder="Insira seu telefone com DDD"
        errors={errors}
        mask="(99) 99999-9999"
        loading={isLoading}
      />

      <Input
        {...register("email")}
        name="email"
        label="E-mail"
        placeholder="Insira seu e-mail"
        errors={errors}
        loading={isLoading}
      />

      <Input
        {...register("password")}
        name="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
        errors={errors}
        loading={isLoading}
      />

      <Input
        {...register("confirmPassword")}
        name="confirmPassword"
        label="Confirme a senha"
        type="password"
        placeholder="Confirme a senha"
        errors={errors}
        loading={isLoading}
      />

      <OrangeButton text="Cadastrar" loading={isLoading} className={styles.submit} />
    </form>
  );
}