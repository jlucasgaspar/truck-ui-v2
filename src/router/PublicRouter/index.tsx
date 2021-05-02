import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage, SignupPage } from 'pages/Users';
import { Routes } from '../Routes';

export const PublicRouter: React.FC = () => (
	<Switch>
		<Route path={Routes.LOGIN} component={LoginPage} />
		<Route path={Routes.SIGNUP} component={SignupPage} />
		<Redirect to={Routes.LOGIN} />
	</Switch>
);