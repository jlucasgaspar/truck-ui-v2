import { Vehicle } from 'models/Vehicle';
import { VehiclesActionTypes } from './VehiclesActionTypes';

// State
export type IVehiclesState = {
    vehicles: Vehicle[],
    getVehiclesWasAlreadyCalled: boolean,
    currentVehicle: Vehicle
}

// Actions
type GetVehicles = {
    type: typeof VehiclesActionTypes.GET_VEHICLES;
    payload: Vehicle[];
}
type CreateVehicle = {
    type: typeof VehiclesActionTypes.CREATE_VEHICLE;
    payload: Vehicle;
}
type IVehicleId = string;
type DeleteVehicle = {
    type: typeof VehiclesActionTypes.DELETE_VEHICLE;
    payload: IVehicleId;
}
type UpdateVehicle = {
    type: typeof VehiclesActionTypes.UPDATE_VEHICLE;
    payload: Vehicle;
}
type SetCurrentVehicle = {
    type: typeof VehiclesActionTypes.SET_CURRENT_VEHICLE;
    payload: Vehicle;
}
export type IVehiclesAction = CreateVehicle | DeleteVehicle | GetVehicles | SetCurrentVehicle | UpdateVehicle;