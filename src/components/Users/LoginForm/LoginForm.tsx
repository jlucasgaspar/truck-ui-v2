import { Form } from 'components/_shared/Form';
import { useForm } from 'react-hook-form';
import { TextInput } from 'components/_shared/Inputs';
import { OrangeButton } from 'components/_shared/Buttons';
import { useLoginFormStyles } from './loginFormStyles';

export const LoginForm: React.FC = () => {
  const styles = useLoginFormStyles();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = (data: any) => alert(JSON.stringify(data));
  console.log(errors)
  
  return (
    <Form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      <TextInput
        {...register("email", { required: true })}
        name="email"
        label="E-mail"
        placeholder="Insira seu e-mail"
        errors={errors}
        loading
      />

      <TextInput
        {...register("password", { required: true })}
        name="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
        errors={errors}
        errorMessage="Senha é obrigatória."
        loading
      />

      <OrangeButton text="Login" loading={true} className={styles.submit} />
    </Form>
  );
}