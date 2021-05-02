import { ThunkAction } from 'redux-thunk';
import { handleToast } from 'utils/toast';
import { Driver, IDriver } from 'models/Driver';
import { handleError } from 'utils/errors';
import { validateInput } from 'utils/validators';
import { IDriversAction } from 'store/types/drivers';
import { setLoadingTo } from 'store/actions/loading';
import { IRootState } from 'store/store';
import { storageProvider } from 'services/storage';
import { api } from 'services/api';
import { setUpdateDriver } from './driverActions';

type IThunk = ThunkAction<void, IRootState, null, IDriversAction>;
type IParams = IDriver.FormFields.Update;

export const handleUpdateDriver = (driverParams: IParams): IThunk => async (dispatch, getState) => {
	try {
		dispatch(setLoadingTo(true));
		const { currentDriver } = getState().driversState;

		const cpfValidated = validateInput.cpf(driverParams.cpf);
		const phoneValidated = validateInput.phone(driverParams.phone);
		const cnhValidated = validateInput.cnh(driverParams.cnh);

		if (cpfValidated.error || phoneValidated.error || cnhValidated.error) {
			dispatch(setLoadingTo(false));
			if (cpfValidated.error) return handleToast.error(cpfValidated.error);
			if (phoneValidated.error) return handleToast.error(phoneValidated.error);
			if (cnhValidated.error) return handleToast.error(cnhValidated.error);
		}

		let photo_url = '';
		if (driverParams.photo) {
			const { url } = await storageProvider.saveFile(driverParams.photo, 'drivers');
			photo_url = url;
		}

		const driverData: IDriver.HttpRequest.UpdateBody = {
			name: driverParams.name,
			cnh: cnhValidated.digits,
			cpf: cpfValidated.digits,
			phone: phoneValidated.digits,
			id: currentDriver?.id as string,
			company_id: currentDriver?.company_id as string,
			photo_url: photo_url
		}

		const response = await api.put<Driver>(`/drivers/${driverData.id}`, driverData);
		const driver = response.data;
		handleToast.success(`Motorista ${driver.name} atualizado com sucesso.`);
		dispatch(setLoadingTo(false));
		return dispatch(setUpdateDriver(driver));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		handleToast.error(errorMessage);
		return dispatch(setLoadingTo(false));
	}
}