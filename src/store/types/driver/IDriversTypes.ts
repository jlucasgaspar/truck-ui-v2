import { Driver } from 'models/Driver';
import { DriversActionTypes } from './DriversActionTypes';

// State
export type IDriversState = {
	isFirstFetch: boolean;
	drivers: Driver[];
	currentDriver: Driver;
}

// Actions
type SetDrivers = {
	type: typeof DriversActionTypes.SET_DRIVERS;
	payload: Driver[];
}

type Create = {
	type: typeof DriversActionTypes.CREATE_DRIVER;
	payload: Driver;
}

type DeleteById = {
	type: typeof DriversActionTypes.DELETE_DRIVER;
	payload: string;
}

type Update = {
	type: typeof DriversActionTypes.UPDATE_DRIVER;
	payload: Driver;
}

type SetCurrentDriver = {
	type: typeof DriversActionTypes.SET_CURRENT_DRIVER;
	payload: Driver;
}

export type IDriversAction = Create | DeleteById | SetDrivers | SetCurrentDriver | Update;