import { Vehicle } from "models";
import { VehiclesActionsTypes } from "store/types";

class VehicleActions {
  public getVehicles = (vehicles: Vehicle.Model[]) => ({
    type: VehiclesActionsTypes.GET_VEHICLES,
    payload: vehicles
  });
  
  public setCurrentVehicle = (vehicle: Vehicle.Model) => ({
    type: VehiclesActionsTypes.SET_CURRENT_VEHICLE,
    payload: vehicle
  });
  
  public createVehicle = (vehicle: Vehicle.Model) => ({
    type: VehiclesActionsTypes.CREATE_VEHICLE,
    payload: vehicle
  });
  
  public deleteVehicleById = (vehicleId: string) => ({
    type: VehiclesActionsTypes.DELETE_VEHICLE,
    payload: vehicleId
  });
  
  public updateVehicle = (vehicle: Vehicle.Model) => ({
    type: VehiclesActionsTypes.UPDATE_VEHICLE,
    payload: vehicle
  });
}

export const vehicleActions = new VehicleActions();