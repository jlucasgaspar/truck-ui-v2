import { Driver } from "models";

// Actions Types List;
export enum DriversActionsTypes {
  SET_DRIVERS = "SET_DRIVERS",
  CREATE_DRIVER = "CREATE_DRIVER",
  UPDATE_DRIVER = "UPDATE_DRIVER",
  DELETE_DRIVER = "DELETE_DRIVER",
  SET_CURRENT_DRIVER = "SET_CURRENT_DRIVER"
}

// State;
export type DriversState = {
  isFirstFetch: boolean;
  drivers: Driver.Model[];
  currentDriver: Driver.Model;
}

// Actions;
export type DriversActions = Create | DeleteById | SetDrivers | SetCurrentDriver | Update;

type SetDrivers = { type: typeof DriversActionsTypes.SET_DRIVERS; payload: Driver.Model[] }
type Create = { type: typeof DriversActionsTypes.CREATE_DRIVER; payload: Driver.Model }
type DeleteById = { type: typeof DriversActionsTypes.DELETE_DRIVER; payload: string }
type Update = { type: typeof DriversActionsTypes.UPDATE_DRIVER; payload: Driver.Model }
type SetCurrentDriver = { type: typeof DriversActionsTypes.SET_CURRENT_DRIVER; payload: Driver.Model }