import { HomePage } from 'pages/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../Routes';
//import { UserWithoutCompanyPage } from 'pages/Users';

export const UserWithoutCompanyRouter: React.FC = () => (
    // <Switch>
    //     <Route path={Routes.CREATE_COMPANY} component={UserWithoutCompanyPage} />
    //     <Redirect to={Routes.CREATE_COMPANY} />E
    // </Switch>
    <Switch>
        <Route path={Routes.HOME} component={HomePage} />
        <Redirect to={Routes.HOME} />E
    </Switch>
);