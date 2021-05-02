import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'store/store';
import { handleSession } from 'store/actions/session';
import { Loading } from 'components/_shared/Loading';
import { PublicRouter } from './PublicRouter';
import { AppRouter } from './AppRouter';

export const RootRouter: React.FC = () => {
	const { isAuthenticated } = useSelector((state: IRootState) => state.sessionState);
	const { loadingSession } = useSelector((state: IRootState) => state.loadingState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleSession());
	}, [dispatch]);

	if (loadingSession) return <Loading text="Aguarde um momento..." />;
	return (
		<BrowserRouter>
			{isAuthenticated ? <AppRouter /> : <PublicRouter />}
		</BrowserRouter>
	);
}