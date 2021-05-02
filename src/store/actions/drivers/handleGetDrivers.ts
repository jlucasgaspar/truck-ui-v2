import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
import { Driver } from 'models/Driver';
import { IRootState } from 'store/store';
import { IDriversAction } from 'store/types/drivers';
import { setLoadingTo } from 'store/actions/loading';
import { api } from 'services/api';
import { handleError } from 'utils/errors';
import { setGetDrivers } from './driverActions';

type IThunkAction = ThunkAction<void, IRootState, null, IDriversAction>;

export const handleGetDrivers = (): IThunkAction => async (dispatch, getState) => {
	try {
		const { driversState, userState } = getState();
		const { user } = userState;
		const { getDriversWasAlreadyCalled } = driversState;
		if (getDriversWasAlreadyCalled) return;
		dispatch(setLoadingTo(true));
		const response = await api.get<Driver[]>(`/drivers/byCompany/${user.company_id}`);
		const drivers = response.data;
		dispatch(setGetDrivers(drivers));
		return dispatch(setLoadingTo(false));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		toastr.error(errorMessage, '');
		return dispatch(setLoadingTo(false));
	}
}