import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
import { IVehicle, Vehicle } from 'models/Vehicle';
import { handleError } from 'utils/errors';
import { api } from 'services/api';
import { IRootState } from 'store/store';
import { IDriversAction } from 'store/types/drivers';
import { setCreateVehicle } from './vehicleActions';
import { setLoadingTo } from '../loading';

type IThunk = ThunkAction<void, IRootState, null, IDriversAction>;
type IParams = IVehicle.FormFields.Create;

export const handleCreateVehicle = (vehicleParams: IParams): IThunk => async (dispatch, getState) => {
	try {
		// VER SE FALTA ALGUMA COISA
		dispatch(setLoadingTo(true));
		const { data } = await api.post<Vehicle>('/vehicles', vehicleParams);
		dispatch(setCreateVehicle(data));
		dispatch(setLoadingTo(false));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		toastr.error(errorMessage, '');
		return dispatch(setLoadingTo(false));
	}
}