import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Grid, MenuItem } from "@material-ui/core";
import { Company } from "models";
import { useCreateCompany } from "hooks/company";
import { OrangeButton, Input, FileInput } from "components/_shared";
import { brazilianStates } from "./brazilianStates";
import { resolver } from "./validationResolver";
import { useStyles } from "./styles";

type FormFields = Company.FormFields.Create;

export const CreateCompanyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, control, setValue } = useForm<FormFields>({ resolver });
  const { createCompany, isLoading } = useCreateCompany();
  const styles = useStyles();

  const handleCreateCompany = useCallback(async (data: FormFields) => {
    await createCompany(data);
  }, [createCompany]);

  return (
    <form noValidate onSubmit={handleSubmit(handleCreateCompany)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("razao_social")}
            name="razao_social"
            label="Razão social da empresa"
            placeholder="Insira a razão social"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("nome_fantasia")}
            name="nome_fantasia"
            label="Nome fantasia da empresa"
            placeholder="Insira o nome fantasia"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("cnpj")}
            name="cnpj"
            label="CNPJ da empresa"
            placeholder="Insira o CNPJ (apenas números)"
            errors={errors}
            loading={isLoading}
            mask="99.999.999/9999-99"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("inscricao_estadual")}
            name="inscricao_estadual"
            label="Inscrição estadual da empresa"
            placeholder="Insira a inscrição estadual (apenas números)"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("addressStreet")}
            name="address"
            label="Endereço da empresa"
            placeholder="Insira o Endereço da empresa"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("addressNumber")}
            name="addressNumber"
            label="Número"
            placeholder="Insira o número do endereço"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("addressComplement")}
            name="addressComplement"
            label="Complemento"
            placeholder="Insira o complemento do endereço (opcional)"
            errors={errors}
            loading={isLoading}
            required={false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            {...register("state")}
            name="state"
            label="Estado da empresa"
            placeholder="Insira o Estado"
            errors={errors}
            loading={isLoading}
            select
            children={brazilianStates.map(state => (
              <MenuItem key={state.id} value={state.value || ""}>
                {state.name}redux
              </MenuItem>
            ))}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Input
            {...register("owner_name")}
            name="owner_name"
            label="Nome do sócio"
            placeholder="Insira o nome completo do sócio"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Input
            {...register("owner_cpf")}
            name="owner_cpf"
            label="CPF do sócio"
            placeholder="Insira o CPF do sócio (apenas números)"
            mask="999.999.999-99"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            {...register("phone")}
            name="phone"
            label="Telefone"
            placeholder="Insira o Telefone/WhatsApp com DDD"
            mask="(99) 99999-9999"
            errors={errors}
            loading={isLoading}
          />
        </Grid>
      </Grid>

      <FileInput
        text="Logo da empresa (opcional)"
        name="logo"
        loading={isLoading}
        control={control}
        setValue={setValue}
      />

      <OrangeButton
        text="Cadastrar empresa"
        className={styles.button}
        loading={isLoading}
      />
    </form>
  );
}