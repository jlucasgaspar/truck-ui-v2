import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
import { Driver } from 'models/Driver';
import { IRootState } from 'store/store';
import { IDriversAction } from 'store/types/drivers';
import { setLoadingTo } from 'store/actions/loading';
import { api } from 'services/api';
import { handleError } from 'utils/errors';
import { setDeleteDriver } from './driverActions';

type IThunkAction = ThunkAction<void, IRootState, null, IDriversAction>;

export const handleDeleteDriver = (driver: Driver): IThunkAction => async (dispatch) => {
	try {
		dispatch(setLoadingTo(true));
		await api.delete(`/drivers/${driver.id}`);
		toastr.success(`Motorista ${driver.name} removido com sucesso.`, '');
		dispatch(setLoadingTo(false));
		return dispatch(setDeleteDriver(driver.id));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		toastr.error(errorMessage, '');
		return dispatch(setLoadingTo(false));
	}
}