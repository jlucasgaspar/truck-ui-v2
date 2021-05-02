import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
import { Company, ICompany } from 'models/Company';
import { api } from 'services/api';
import { storageProvider } from 'services/storage';
import { handleError } from 'utils/errors';
import { validateInput } from 'utils/validators';
import { IRootState } from 'store/store';
import { setLoadingTo } from 'store/actions/loading';
import { setUser } from 'store/actions/user';
import { setCompany } from 'store/actions/company';
import { ICompanyActions } from 'store/types/company';

type IThunkAction = ThunkAction<void, IRootState, null, ICompanyActions>;
type IParams = ICompany.FormFields.Create;

export const handleCreateCompany = (values: IParams): IThunkAction => async (dispatch, getState) => {
	try {
		dispatch(setLoadingTo(true));
		const { userState } = getState();
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
			if (validatedIE.error) toastr.error(validatedIE.error, '')
			if (validatedCnpj.error) toastr.error(validatedCnpj.error, '')
			if (cpfValidated.error) toastr.error(cpfValidated.error, '')
			if (validatedPhone.error) toastr.error(validatedPhone.error, '')
			if (comercial_phone?.error) toastr.error(comercial_phone.error, '')
			return setLoadingTo(false);
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
		dispatch(setLoadingTo(false));
		dispatch(setCompany(company));
		dispatch(setUser({ ...userState.user, company_id: company.id }));
		return toastr.success(`Empresa ${values.nome_fantasia} criada com sucesso.`, '');
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		toastr.error(errorMessage, '');
		return dispatch(setLoadingTo(false));
	}
}