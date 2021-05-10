import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "store";
import { useHandleSessionToken } from "hooks/session";
import { Loading } from "components/_shared";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

export const RootRouter: React.FC = () => {
	const { isAuthenticated } = useSelector((state: IRootState) => state.sessionState);
	const { handleToken, isLoading } = useHandleSessionToken();
	const [isFirstMount, setIsFirstMount] = useState(true);

	useEffect(() => {
		const executeAsync = async () => await handleToken();
		if (isFirstMount) {
			executeAsync();
			setIsFirstMount(false);
		}
	}, [handleToken, isFirstMount]);

	if (isLoading) return <Loading text="Aguarde um momento..." />;
	return (
		<BrowserRouter>
			{isAuthenticated ? <PrivateRouter /> : <PublicRouter />}
		</BrowserRouter>
	);
}