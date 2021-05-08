import { Vehicle } from 'models/Vehicle';
import { IVehiclesAction, IVehiclesState, VehiclesActionTypes } from 'store/types/vehicle';

const initialState: IVehiclesState = {
	getVehiclesWasAlreadyCalled: false,
	vehicles: [],
	currentVehicle: {} as Vehicle
}

export const vehicleReducer = (state = initialState, action: IVehiclesAction): IVehiclesState => {
	switch (action.type) {
		case VehiclesActionTypes.GET_VEHICLES:
			return { ...state, getVehiclesWasAlreadyCalled: true, vehicles: action.payload }

		case VehiclesActionTypes.CREATE_VEHICLE:
			return { ...state, vehicles: [action.payload, ...state.vehicles] }

		case VehiclesActionTypes.UPDATE_VEHICLE:
			const updatedVehiclesArray = state.vehicles.map(vehicle => vehicle.id === action.payload.id ? action.payload : vehicle);
			return { ...state, vehicles: updatedVehiclesArray }

		case VehiclesActionTypes.DELETE_VEHICLE:
			const removedVehicleArray = state.vehicles.filter(vehicle => vehicle.id !== action.payload);
			return { ...state, vehicles: removedVehicleArray }

		case VehiclesActionTypes.SET_CURRENT_VEHICLE:
			return { ...state, currentVehicle: action.payload }

		default:
			return state;
	}
}