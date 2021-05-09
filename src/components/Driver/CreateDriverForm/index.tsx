import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IDriver } from 'models/Driver';
import { OrangeButton, Input, FileInput } from 'components/_shared';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

type IForm = IDriver.FormFields.Create;

export const CreateDriverForm: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<IForm>({ resolver });
  const styles = useStyles();

  const handleCreateDriver = useCallback(async (data: IForm) => {
    return console.log(data);
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

      <FileInput
        text="Foto do motorista (opcional)"
        name="photo"
        loading={isLoading}
        control={control}
        setValue={setValue}
      />

      <OrangeButton
        text="Adicionar motorista"
        className={styles.button}
        loading={isLoading}
      />
    </form>
  );
}

