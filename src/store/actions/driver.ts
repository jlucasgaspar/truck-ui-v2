import { Driver } from 'models/Driver';
import { DriversActionTypes } from 'store/types/driver';

class DriversActions {
  public setDrivers = (drivers: Driver[]) => ({
    type: DriversActionTypes.SET_DRIVERS,
    payload: drivers
  });

  public setCurrentDriver = (driver: Driver) => ({
    type: DriversActionTypes.SET_CURRENT_DRIVER,
    payload: driver
  });

  public create = (driver: Driver) => ({
    type: DriversActionTypes.CREATE_DRIVER,
    payload: driver
  });

  public deleteById = (driverId: string) => ({
    type: DriversActionTypes.DELETE_DRIVER,
    payload: driverId
  });

  public update = (driver: Driver) => ({
    type: DriversActionTypes.UPDATE_DRIVER,
    payload: driver
  });
}

export const driverActions = new DriversActions();