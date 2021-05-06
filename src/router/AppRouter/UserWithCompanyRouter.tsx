import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { Routes } from '../Routes';

export const UserWithCompanyRouter: React.FC = () => (
    <Switch>
        <Route path={Routes.HOME} component={HomePage} />
        <Redirect to={Routes.HOME} />
    </Switch>
);