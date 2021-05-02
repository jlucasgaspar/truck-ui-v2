import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as Reducers from 'store/reducers';

export const RootReducer = combineReducers({
	toastr: toastrReducer,
	loadingState: Reducers.loadingReducer,
	sessionState: Reducers.sessionReducer,
	userState: Reducers.userReducer,
	companyState: Reducers.companyReducer,
	driversState: Reducers.driverReducer,
	vehiclesState: Reducers.vehicleReducer,
	//ctesState: Reducers.ctesReducer
});

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type IRootState = ReturnType<typeof RootReducer>;