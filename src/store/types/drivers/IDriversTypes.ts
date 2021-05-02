import { Driver } from 'models/Driver';
import { DriversActionTypes } from './DriversActionTypes';

// State
export type IDriversState = {
    getDriversWasAlreadyCalled: boolean;
    drivers: Driver[];
    currentDriver: Driver;
}

type IDriverId = string;

// Actions
type GetDrivers = {
    type: typeof DriversActionTypes.GET_DRIVERS;
    payload: Driver[];
}
type CreateDriver = {
    type: typeof DriversActionTypes.CREATE_DRIVER;
    payload: Driver;
}
type DeleteDriver = {
    type: typeof DriversActionTypes.DELETE_DRIVER;
    payload: IDriverId;
}
type UpdateDriver = {
    type: typeof DriversActionTypes.UPDATE_DRIVER;
    payload: Driver;
}
type SetCurrentDriver = {
    type: typeof DriversActionTypes.SET_CURRENT_DRIVER;
    payload: Driver;
}
export type IDriversAction = CreateDriver | DeleteDriver | GetDrivers | SetCurrentDriver | UpdateDriver;