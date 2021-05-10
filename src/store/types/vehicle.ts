import { Vehicle } from "models";

// Actions Types List;
export enum VehiclesActionsTypes {
  GET_VEHICLES = "GET_VEHICLES",
  CREATE_VEHICLE = "CREATE_VEHICLE",
  UPDATE_VEHICLE = "UPDATE_VEHICLE",
  DELETE_VEHICLE = "DELETE_VEHICLE",
  SET_CURRENT_VEHICLE = "SET_CURRENT_VEHICLE"
}

// State;
export type VehiclesState = {
  vehicles: Vehicle.Model[],
  getVehiclesWasAlreadyCalled: boolean,
  currentVehicle: Vehicle.Model
}

// Actions;
export type VehiclesActions = Create | DeleteById | GetVehicles | SetCurrentVehicle | Update;

type GetVehicles = { type: typeof VehiclesActionsTypes.GET_VEHICLES; payload: Vehicle.Model[] }
type Create = { type: typeof VehiclesActionsTypes.CREATE_VEHICLE; payload: Vehicle.Model }
type DeleteById = { type: typeof VehiclesActionsTypes.DELETE_VEHICLE; payload: string }
type Update = { type: typeof VehiclesActionsTypes.UPDATE_VEHICLE; payload: Vehicle.Model }
type SetCurrentVehicle = { type: typeof VehiclesActionsTypes.SET_CURRENT_VEHICLE; payload: Vehicle.Model }