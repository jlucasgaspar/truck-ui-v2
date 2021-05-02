import { useForm } from 'react-hook-form';
import { IUser } from 'models/User';
import { useDispatch } from 'react-redux';
import { handleLogin } from 'store/actions/session';
import { Form } from 'components/_shared/Form';
import { Input } from 'components/_shared/Inputs';
import { OrangeButton } from 'components/_shared/Buttons';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleLoginSubmit = (data: IUser.FormFields.Login) => dispatch(handleLogin(data));
  
  return (
    <Form className={styles.form} onSubmit={handleSubmit(handleLoginSubmit)}>
      <Input
        {...register("email")}
        name="email"
        label="E-mail"
        placeholder="Insira seu e-mail"
        errors={errors}
        //loading
      />

      <Input
        {...register("password")}
        name="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
        errors={errors}
        //loading
      />

      <OrangeButton text="Login" loading={false} className={styles.submit} />
    </Form>
  );
}