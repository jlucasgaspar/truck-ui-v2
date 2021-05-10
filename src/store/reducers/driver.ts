import { Driver } from "models";
import { DriversActionsTypes, DriversState, DriversActions } from "store/types";

const initialState: DriversState = {
	isFirstFetch: true,
	drivers: [],
	currentDriver: {} as Driver.Model
}

export const driverReducer = (state = initialState, action: DriversActions): DriversState => {
	switch (action.type) {
		case DriversActionsTypes.SET_DRIVERS:
			return { ...state, isFirstFetch: false, drivers: action.payload }

		case DriversActionsTypes.CREATE_DRIVER:
			return { ...state, drivers: [action.payload, ...state.drivers] }

		case DriversActionsTypes.UPDATE_DRIVER:
			const updatedDriverArray = state.drivers.map(driver => driver.id === action.payload.id ? action.payload : driver);
			return { ...state, drivers: updatedDriverArray }

		case DriversActionsTypes.DELETE_DRIVER:
			const removedDriverArray = state.drivers.filter(driver => driver.id !== action.payload);
			return { ...state, drivers: removedDriverArray }

		case DriversActionsTypes.SET_CURRENT_DRIVER:
			return { ...state, currentDriver: action.payload }

		default:
			return state;
	}
}