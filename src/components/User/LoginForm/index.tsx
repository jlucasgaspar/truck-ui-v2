import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from 'models/User';
import { useLogin } from 'hooks/session';
import { Input, OrangeButton } from 'components/_shared';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
  const { login, isLoading } = useLogin();
  const styles = useStyles();

  const handleLogin = useCallback(async (data: IUser.FormFields.Login) => {
    await login(data)
  }, [login]);
  
  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(handleLogin)}>
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

      <OrangeButton text="Login" loading={isLoading} className={styles.submit} />
    </form>
  );
}