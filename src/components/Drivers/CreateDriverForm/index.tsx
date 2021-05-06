import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IDriver } from 'models/Driver';
import { handleCreateDriver } from 'store/actions/drivers';
import { IRootState } from 'store/store';
import { OrangeButton } from 'components/_shared/Buttons';
import { Input } from 'components/_shared/Inputs';
import { resolver } from './validationResolver';
import { useStyles } from './styles';

export const CreateDriverForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
  const { loading } = useSelector((state: IRootState) => state.loadingState);
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleSubmitDriver = useCallback((data: IDriver.FormFields.Create) => {
    dispatch(handleCreateDriver(data));
  }, [dispatch]);

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitDriver)}>
      <Input
        {...register("name")}
        name="name"
        label="Nome do motorista"
        placeholder="Insira o nome do motorista"
        errors={errors}
        loading={loading}
      />

      <Input
        {...register("phone")}
        name="phone"
        label="Telefone do motorista"
        placeholder="Insira o telefone do motorista (com DDD)"
        mask="(99) 99999-9999"
        errors={errors}
        loading={loading}
      />

      <Input
        {...register("cpf")}
        name="cpf"
        label="CPF do motorista"
        placeholder="Insira o CPF do motorista"
        mask="999.999.999-99"
        errors={errors}
        loading={loading}
      />

      <OrangeButton
        text="Adicionar motorista"
        className={styles.button}
        loading={loading}
      />
    </form>
  );
}