import { ThunkAction } from 'redux-thunk';
import { Vehicle } from 'models/Vehicle';
import { IRootState } from 'store/store';
import { IVehiclesAction, VehiclesActionTypes } from 'store/types/vehicles';

type IThunkAction = ThunkAction<void, IRootState, null, IVehiclesAction>;

export const setGetVehicles = (vehicles: Vehicle[]): IThunkAction => (dispatch) => dispatch({
	type: VehiclesActionTypes.GET_VEHICLES,
	payload: vehicles
});

export const setCurrentVehicle = (vehicle: Vehicle): IThunkAction => (dispatch) => dispatch({
	type: VehiclesActionTypes.SET_CURRENT_VEHICLE,
	payload: vehicle
});

export const setCreateVehicle = (vehicle: Vehicle): IThunkAction => (dispatch) => dispatch({
	type: VehiclesActionTypes.CREATE_VEHICLE,
	payload: vehicle
});

export const setDeleteVehicle = (vehicleId: string): IThunkAction => (dispatch) => dispatch({
	type: VehiclesActionTypes.DELETE_VEHICLE,
	payload: vehicleId
});

export const setUpdateVehicle = (vehicle: Vehicle): IThunkAction => (dispatch) => dispatch({
	type: VehiclesActionTypes.UPDATE_VEHICLE,
	payload: vehicle
});