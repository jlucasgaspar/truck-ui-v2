import { Driver } from 'models/Driver';
import { DriversActionTypes, IDriversState, IDriversAction } from 'store/types/drivers';

const initialState: IDriversState = {
	getDriversWasAlreadyCalled: false,
	drivers: [],
	currentDriver: {} as Driver
}

export const driverReducer = (state = initialState, action: IDriversAction): IDriversState => {
	switch (action.type) {
		case DriversActionTypes.GET_DRIVERS:
			return { ...state, getDriversWasAlreadyCalled: true, drivers: action.payload }

		case DriversActionTypes.CREATE_DRIVER:
			return { ...state, drivers: [action.payload, ...state.drivers] }

		case DriversActionTypes.UPDATE_DRIVER:
			const updatedDriverArray = state.drivers.map(driver => driver.id === action.payload.id ? action.payload : driver);
			return { ...state, drivers: updatedDriverArray }

		case DriversActionTypes.DELETE_DRIVER:
			const removedDriverArray = state.drivers.filter(driver => driver.id !== action.payload);
			return { ...state, drivers: removedDriverArray }

		case DriversActionTypes.SET_CURRENT_DRIVER:
			return { ...state, currentDriver: action.payload }

		default:
			return state;
	}
}