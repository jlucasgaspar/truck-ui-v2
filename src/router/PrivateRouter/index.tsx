import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from 'store';
import { useGetSessionInfo } from 'hooks/session';
import { AppLayout } from 'layout/AppLayout';
import { Loading } from 'components/_shared/Loading';
import { UserWithoutCompanyRouter } from './UserWithoutCompanyRouter';
import { AppRouter } from './AppRouter';

export const PrivateRouter: React.FC = () => {
	const { user } = useSelector((state: IRootState) => state.userState);
	const { isFirstFetch } = useSelector((state: IRootState) => state.sessionState);
	const { getSessionInfo, isLoading } = useGetSessionInfo();

	useEffect(() => {
		const executeAsync = async () => await getSessionInfo();
		if (isFirstFetch) executeAsync();
	}, [getSessionInfo, isFirstFetch]);

	return (
		<AppLayout>
			{isLoading
				? <Loading text="Finalizando de carregar os dados..." />
				: (user.company_id ? <AppRouter /> : <UserWithoutCompanyRouter />)
			}
		</AppLayout>
	);
}