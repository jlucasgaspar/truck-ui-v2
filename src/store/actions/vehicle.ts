import { Vehicle } from 'models/Vehicle';
import { VehiclesActionTypes } from 'store/types/vehicle';

class VehicleActions {
  public getVehicles = (vehicles: Vehicle[]) => ({
    type: VehiclesActionTypes.GET_VEHICLES,
    payload: vehicles
  });
  
  public setCurrentVehicle = (vehicle: Vehicle) => ({
    type: VehiclesActionTypes.SET_CURRENT_VEHICLE,
    payload: vehicle
  });
  
  public createVehicle = (vehicle: Vehicle) => ({
    type: VehiclesActionTypes.CREATE_VEHICLE,
    payload: vehicle
  });
  
  public deleteVehicleById = (vehicleId: string) => ({
    type: VehiclesActionTypes.DELETE_VEHICLE,
    payload: vehicleId
  });
  
  public updateVehicle = (vehicle: Vehicle) => ({
    type: VehiclesActionTypes.UPDATE_VEHICLE,
    payload: vehicle
  });
}

export const vehicleActions = new VehicleActions();