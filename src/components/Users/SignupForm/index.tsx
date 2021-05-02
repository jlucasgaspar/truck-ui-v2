import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IUser } from 'models/User';
import { IRootState } from 'store/store';
import { handleSignUp } from 'store/actions/session';
import { Form } from 'components/_shared/Form';
import { Input } from 'components/_shared/Inputs';
import { OrangeButton } from 'components/_shared/Buttons';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

export const SignupForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
  const { loading } = useSelector((state: IRootState) => state.loadingState);
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleSignup = (data: IUser.FormFields.SignUp) => dispatch(handleSignUp(data));

  return (
    <Form className={styles.form} onSubmit={handleSubmit(handleSignup)}>
      <Input
        {...register("name")}
        name="name"
        label="Nome"
        placeholder="Insira seu nome"
        errors={errors}
        loading={loading}
      />

      <Input
        {...register("phone")}
        name="phone"
        label="Telefone/WhatsApp"
        type="phone"
        placeholder="Insira seu telefone com DDD"
        errors={errors}
        mask="(99) 99999-9999"
        loading={loading}
      />

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

      <Input
        {...register("passwordConfirmation")}
        name="passwordConfirmation"
        label="Confirme a senha"
        type="password"
        placeholder="Confirme a senha"
        errors={errors}
        loading={loading}
      />

      <OrangeButton text="Cadastrar" loading={false} className={styles.submit} />
    </Form>
  );
}