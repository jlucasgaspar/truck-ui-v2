import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company, ICompany } from 'models/Company';
import { api, storageProvider } from 'services';
import { IRootState } from 'store';
import { companyActions, userActions } from 'store/actions';
import { validateInput, handleError } from 'utils';
import { useToast } from '../toast';

export const useCreateCompany = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { user } = useSelector((state: IRootState) => state.userState);
  const { toast } = useToast()
  const dispatch = useDispatch();

  const createCompany = useCallback(async (values: ICompany.FormFields.Create) => {
    try {
      setLoading(true);
      const stateName = values.state.split('_')[1];
      const stateInitials = stateName.split(' | ')[0];
      const validatedIE = validateInput.inscricaoEstadual(values.inscricao_estadual, stateInitials);
      const validatedCnpj = validateInput.cnpj(values.cnpj);
      const cpfValidated = validateInput.cpf(values.owner_cpf);
      const validatedPhone = validateInput.phone(values.phone);
      let comercial_phone;
      if (values.comercial_phone) {
        comercial_phone = validateInput.phone(values.comercial_phone);
      }

      if (validatedIE.error || validatedCnpj.error || cpfValidated.error || validatedPhone.error || comercial_phone?.error) {
        if (validatedIE.error) toast.error(validatedIE.error);
        if (validatedCnpj.error) toast.error(validatedCnpj.error);
        if (cpfValidated.error) toast.error(cpfValidated.error);
        if (validatedPhone.error) toast.error(validatedPhone.error);
        if (comercial_phone?.error) toast.error(comercial_phone.error);
        return;
      }

      const street = values.addressStreet || '';
      const number = values.addressNumber ? ` - ${values.addressNumber}` : '';
      const complement = values.addressComplement ? ` - ${values.addressComplement}` : '';
      const state = values.state ? ` - ${stateName}` : '';
      const address = street + number + complement + state;

      let logo_url = '';
      if (values.logo) {
        const { url } = await storageProvider.saveFile(values.logo, 'companies');
        logo_url = url;
      }

      const companyData: ICompany.HttpRequest.CreateBody = {
        razao_social: values.razao_social,
        nome_fantasia: values.nome_fantasia,
        owner_name: values.owner_name,
        owner_cpf: cpfValidated.digits,
        cnpj: validatedCnpj.digits,
        inscricao_estadual: validatedIE.digits,
        address: address,
        phone: validatedPhone.digits,
        comercial_phone: comercial_phone?.digits || '',
        logo_url: logo_url
      }

      const response = await api.post<Company>('/companies', companyData);
      const company = response.data;
      dispatch(companyActions.setCompany(company));
      dispatch(userActions.setUser({ ...user, company_id: company.id }));
      setLoading(false);
      return toast.success(`Empresa ${values.nome_fantasia} criada com sucesso.`);
    } catch (err) {
      const errorMessage = handleError.generateMessage(err);
      toast.error(errorMessage);
      setLoading(false);
    }
  }, [dispatch, toast, user]);

  return { createCompany, isLoading }
}