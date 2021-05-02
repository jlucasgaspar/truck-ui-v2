import { ThunkAction } from 'redux-thunk';
import { handleToast } from 'utils/toast';
import { IRootState } from 'store/store';
import { setLoadingTo } from 'store/actions/loading';
import { api } from 'services/api';
import { handleError } from 'utils/errors';
import { Vehicle } from 'models/Vehicle';
import { IVehiclesAction } from 'store/types/vehicles';
import { setDeleteVehicle } from './vehicleActions';

type IThunkAction = ThunkAction<void, IRootState, null, IVehiclesAction>;

export const handleDeleteVehicle = (vehicle: Vehicle): IThunkAction => async (dispatch) => {
	try {
		// VER SE FALTA ALGUMA COISA
		dispatch(setLoadingTo(true));
		await api.delete(`/vehicles/${vehicle.id}`);
		//handleToast.success(`Motorista ${vehicle.owner_name} removido com sucesso.`);
		handleToast.success(`Veículo ADICIONAR_NOME removido com sucesso.`);
		dispatch(setLoadingTo(false));
		return dispatch(setDeleteVehicle(vehicle.id));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		handleToast.error(errorMessage);
		return dispatch(setLoadingTo(false));
	}
}