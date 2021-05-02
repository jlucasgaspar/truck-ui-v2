import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../Routes';
import { HomePage } from 'pages/Home';

export const UserWithCompanyRouter: React.FC = () => (
    <Switch>
        <Route path={Routes.HOME} component={HomePage} />
        <Redirect to={Routes.HOME} />
    </Switch>
);