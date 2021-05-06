import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { User } from 'models/User';
import { Company } from 'models/Company';
import { api } from 'services/api';
import { handleError } from 'utils/errors';
import { handleToast } from 'utils/toast';
import { IRootState } from 'store/store';
import { setUser } from 'store/actions/user';
import { setCompany } from 'store/actions/company';
import { setGetSessionWasAlreadyCalled } from 'store/actions/session'

import { Loading } from 'components/_shared/Loading';
import { AppLayout } from 'layout/AppLayout';
import { UserWithoutCompanyRouter } from './UserWithoutCompanyRouter';
import { UserWithCompanyRouter } from './UserWithCompanyRouter';

type IUserAndCompanyResponse = { user: User; company?: Company; }

export const AppRouter: React.FC = () => {
	const { user } = useSelector((state: IRootState) => state.userState);
	const { getSessionWasAlreadyCalled } = useSelector((state: IRootState) => state.sessionState);
	const dispatch = useDispatch();

	useEffect(() => {
		const getUserAndCompanyInfo = async () => {
			try {
				const { data } = await api.get<IUserAndCompanyResponse>('/sessions');
				dispatch(setUser(data.user));
				if (data.company) dispatch(setCompany(data.company));
				dispatch(setGetSessionWasAlreadyCalled(true));
			} catch (err) {
				dispatch(setGetSessionWasAlreadyCalled(false));
				const message = handleError.generateMessage(err);
				return handleToast.error(message);
			}
		}

		if (getSessionWasAlreadyCalled === false) getUserAndCompanyInfo();
	}, [dispatch, getSessionWasAlreadyCalled]);

	return (
		<AppLayout>
			{isEmpty(user) && <Loading text="Finalizando de carregar os dados..." />}

			{!isEmpty(user) && (
				user.company_id ? <UserWithCompanyRouter /> : <UserWithoutCompanyRouter />
			)}
		</AppLayout>
	);
}