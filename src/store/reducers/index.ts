import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import { sessionReducer } from "./session";
import { driverReducer } from "./driver";
import { userReducer } from "./user";
import { companyReducer } from "./company";
import { vehicleReducer } from "./vehicle";

export const RootReducer = combineReducers({
  toastr: toastrReducer,
  sessionState: sessionReducer,
  userState: userReducer,
  companyState: companyReducer,
  driversState: driverReducer,
  vehiclesState: vehicleReducer
});