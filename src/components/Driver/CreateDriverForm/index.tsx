import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IDriver } from 'models/Driver';
import { OrangeButton, Input, UploadInput } from 'components/_shared';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

export const CreateDriverForm: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({ resolver });
  const styles = useStyles();

  const handleCreateDriver = useCallback(async (data: IDriver.FormFields.Create) => {
    setLoading(true);
    return console.log(data);
    setLoading(false);
  }, []);

  return (
    <form noValidate onSubmit={handleSubmit(handleCreateDriver)}>
      <Input
        {...register("name")}
        name="name"
        label="Nome do motorista"
        placeholder="Insira o nome do motorista"
        errors={errors}
        loading={isLoading}
      />

      <Input
        {...register("phone")}
        name="phone"
        label="Telefone do motorista"
        placeholder="Insira o telefone do motorista (com DDD)"
        mask="(99) 99999-9999"
        errors={errors}
        loading={isLoading}
      />

      <Input
        {...register("cpf")}
        name="cpf"
        label="CPF do motorista"
        placeholder="Insira o CPF do motorista"
        mask="999.999.999-99"
        errors={errors}
        loading={isLoading}
      />

      <UploadInput
        {...register("photo")}
        name="photo"
        text="Foto do motorista (opcional)"
        loading={isLoading}
        formValues={getValues()}
      />

      <OrangeButton
        text="Adicionar motorista"
        className={styles.button}
        loading={isLoading}
      />
    </form>
  );
}