import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from 'models/User';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'store/store';
import { handleLogin } from 'store/actions/session';
import { Form } from 'components/_shared/Form';
import { Input } from 'components/_shared/Inputs';
import { OrangeButton } from 'components/_shared/Buttons';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
  const { loading } = useSelector((state: IRootState) => state.loadingState);
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleLoginSubmit = useCallback((data: IUser.FormFields.Login) => {
    dispatch(handleLogin(data));
  }, [dispatch]);
  
  return (
    <Form className={styles.form} onSubmit={handleSubmit(handleLoginSubmit)}>
      <Input
        {...register("email")}
        name="email"
        label="E-mail"
        placeholder="Insira seu e-mail"
        errors={errors}
        loading={loading}
      />

      <Input
        {...register("password")}
        name="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
        errors={errors}
        loading={loading}
      />

      <OrangeButton text="Login" loading={loading} className={styles.submit} />
    </Form>
  );
}