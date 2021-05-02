import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
import { Vehicle } from 'models/Vehicle';
import { handleError } from 'utils/errors';
import { api } from 'services/api';
import { IRootState } from 'store/store';
import { IDriversAction } from 'store/types/drivers';
import { setGetVehicles } from './vehicleActions';
import { setLoadingTo } from '../loading';

type IThunk = ThunkAction<void, IRootState, null, IDriversAction>;

export const handleGetVehicles = (): IThunk => async (dispatch, getState) => {
	try {
		// VER SE FALTA ALGUMA COISA
		const { vehiclesState, userState } = getState();
		const { getVehiclesWasAlreadyCalled } = vehiclesState;
		const { user } = userState;
		if (getVehiclesWasAlreadyCalled) return;
		dispatch(setLoadingTo(true));
		const { data } = await api.get<Vehicle[]>(`/vehicles/byCompany/${user.company_id}`);
		dispatch(setGetVehicles(data));
		dispatch(setLoadingTo(false));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		toastr.error(errorMessage, '');
		return dispatch(setLoadingTo(false));
	}
}