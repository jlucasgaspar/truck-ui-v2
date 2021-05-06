import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { DriversPage } from 'pages/Drivers';
import { Routes } from '../Routes';

export const UserWithCompanyRouter: React.FC = () => (
	<Switch>
		<Route path={Routes.HOME} component={HomePage} />
		<Route path={Routes.DRIVERS} component={DriversPage} />
		<Redirect to={Routes.HOME} />
	</Switch>
);