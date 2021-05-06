import { Switch, Route, Redirect } from 'react-router-dom';
import { UserWithoutCompanyPage } from 'pages/Users';
import { Routes } from '../Routes';

export const UserWithoutCompanyRouter: React.FC = () => (
	<Switch>
		<Route path={Routes.CREATE_COMPANY} component={UserWithoutCompanyPage} />
		<Redirect to={Routes.CREATE_COMPANY} />E
	</Switch>
);