import { ThunkAction } from 'redux-thunk';
import { handleToast } from 'utils/toast';
import { Driver, IDriver } from 'models/Driver';
import { api } from 'services/api';
import { storageProvider } from 'services/storage';
import { handleError } from 'utils/errors';
import { validateInput } from 'utils/validators';
import { IDriversAction } from 'store/types/drivers';
import { setLoadingTo } from 'store/actions/loading';
import { IRootState } from 'store/store';
import { setCreateDriver } from './driverActions';

type IThunk = ThunkAction<void, IRootState, null, IDriversAction>;
type IParams = IDriver.FormFields.Create;

export const handleCreateDriver = (driverParams: IParams): IThunk => async (dispatch, getState) => {
	try {
		dispatch(setLoadingTo(true));

		const { name, cnh, cpf, phone, photo } = driverParams
		const { drivers } = getState().driversState;

		const cpfValidated = validateInput.cpf(cpf);
		const phoneValidated = validateInput.phone(phone);
		const cnhValidated = validateInput.cnh(cnh);
		const driverCpfExists = drivers.find(driver => driver.cpf === cpfValidated.digits);
		const driverCnhExists = drivers.find(driver => driver.cnh === cnhValidated.digits);

		if (cpfValidated.error || phoneValidated.error || cnhValidated.error || driverCpfExists || driverCnhExists) {
			dispatch(setLoadingTo(false));
			if (cpfValidated.error) return handleToast.error(cpfValidated.error);
			if (phoneValidated.error) return handleToast.error(phoneValidated.error);
			if (cnhValidated.error) return handleToast.error(cnhValidated.error);
			if (driverCpfExists) return handleToast.error('Este CPF já está cadastrado na empresa.');
			if (driverCnhExists) return handleToast.error('Esta CNH já está cadastrada na empresa.');
		}

		let photo_url = '';
		if (photo) {
			const { url } = await storageProvider.saveFile(photo, 'drivers');
			photo_url = url;
		}

		const driverData: IDriver.HttpRequest.CreateBody = {
			name: name,
			cnh: cnhValidated.digits,
			cpf: cpfValidated.digits,
			phone: phoneValidated.digits,
			photo_url: photo_url
		}

		const response = await api.post<Driver>('/drivers', driverData);
		const driver = response.data;
		handleToast.success(`Motorista ${driver.name} adicionado com sucesso.`);
		dispatch(setLoadingTo(false));
		return dispatch(setCreateDriver(driver));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		handleToast.error(errorMessage);
		return dispatch(setLoadingTo(false));
	}
}