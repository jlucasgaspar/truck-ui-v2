import { Driver } from "models";
import { DriversActionsTypes } from "store/types";

class DriversActions {
  public setDrivers = (drivers: Driver.Model[]) => ({
    type: DriversActionsTypes.SET_DRIVERS,
    payload: drivers
  });

  public setCurrentDriver = (driver: Driver.Model) => ({
    type: DriversActionsTypes.SET_CURRENT_DRIVER,
    payload: driver
  });

  public create = (driver: Driver.Model) => ({
    type: DriversActionsTypes.CREATE_DRIVER,
    payload: driver
  });

  public deleteById = (driverId: string) => ({
    type: DriversActionsTypes.DELETE_DRIVER,
    payload: driverId
  });

  public update = (driver: Driver.Model) => ({
    type: DriversActionsTypes.UPDATE_DRIVER,
    payload: driver
  });
}

export const driverActions = new DriversActions();