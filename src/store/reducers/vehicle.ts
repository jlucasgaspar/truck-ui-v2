import { Vehicle } from "models";
import { VehiclesActions, VehiclesState, VehiclesActionsTypes } from "store/types";

const initialState: VehiclesState = {
	getVehiclesWasAlreadyCalled: false,
	vehicles: [],
	currentVehicle: {} as Vehicle.Model
}

export const vehicleReducer = (state = initialState, action: VehiclesActions): VehiclesState => {
	switch (action.type) {
		case VehiclesActionsTypes.GET_VEHICLES:
			return { ...state, getVehiclesWasAlreadyCalled: true, vehicles: action.payload }

		case VehiclesActionsTypes.CREATE_VEHICLE:
			return { ...state, vehicles: [action.payload, ...state.vehicles] }

		case VehiclesActionsTypes.UPDATE_VEHICLE:
			const updatedVehiclesArray = state.vehicles.map(vehicle => vehicle.id === action.payload.id ? action.payload : vehicle);
			return { ...state, vehicles: updatedVehiclesArray }

		case VehiclesActionsTypes.DELETE_VEHICLE:
			const removedVehicleArray = state.vehicles.filter(vehicle => vehicle.id !== action.payload);
			return { ...state, vehicles: removedVehicleArray }

		case VehiclesActionsTypes.SET_CURRENT_VEHICLE:
			return { ...state, currentVehicle: action.payload }

		default:
			return state;
	}
}