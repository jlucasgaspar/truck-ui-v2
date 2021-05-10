import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { firebaseAuth } from 'config/firebase';
import { setBearerTokenToAuthorizationHeaders } from "services";
import { sessionActions } from "store/actions";

export const useLogout = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const logout = useCallback(async () => {
    setLoading(true);
    setBearerTokenToAuthorizationHeaders(null);
    await firebaseAuth.signOut();
    setLoading(false);
    return dispatch(sessionActions.finish());
  }, [dispatch]);

  return { logout, isLoading }
}