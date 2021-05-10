import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "pages/Home";
import { DriversPage } from "pages/Driver";
import { Routes } from "../Routes";

export const AppRouter: React.FC = () => (
	<Switch>
		<Route path={Routes.HOME} component={HomePage} />
		<Route path={Routes.DRIVERS} component={DriversPage} />
		<Redirect to={Routes.HOME} />
	</Switch>
);