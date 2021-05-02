import { ThunkAction } from 'redux-thunk';
import { Driver } from 'models/Driver';
import { IRootState } from 'store/store';
import { DriversActionTypes, IDriversAction } from 'store/types/drivers';

type IThunkAction = ThunkAction<void, IRootState, null, IDriversAction>;

export const setGetDrivers = (drivers: Driver[]): IThunkAction => (dispatch) => dispatch({
	type: DriversActionTypes.GET_DRIVERS,
	payload: drivers
});

export const setCurrentDriver = (driver: Driver): IThunkAction => (dispatch) => dispatch({
	type: DriversActionTypes.SET_CURRENT_DRIVER,
	payload: driver
});

export const setCreateDriver = (driver: Driver): IThunkAction => (dispatch) => dispatch({
	type: DriversActionTypes.CREATE_DRIVER,
	payload: driver
});

export const setDeleteDriver = (driverId: string): IThunkAction => (dispatch) => dispatch({
	type: DriversActionTypes.DELETE_DRIVER,
	payload: driverId
});

export const setUpdateDriver = (driver: Driver): IThunkAction => (dispatch) => dispatch({
	type: DriversActionTypes.UPDATE_DRIVER,
	payload: driver
});