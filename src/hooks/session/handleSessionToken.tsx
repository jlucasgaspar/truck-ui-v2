import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { firebaseAuth } from 'config/firebase';
import { setBearerTokenToAuthorizationHeaders } from "services";
import { sessionActions } from "store/actions";
import { handleError } from "utils";
import { useToast } from "../toast";

export const useHandleSessionToken = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleToken = useCallback(async () => {
    return firebaseAuth.onIdTokenChanged(async (user) => {
      try {
        if (!user) return dispatch(sessionActions.finish());
        setLoading(true);
        const token = await user.getIdToken();
        setBearerTokenToAuthorizationHeaders(token);
        dispatch(sessionActions.init());
        setLoading(false);
      } catch (err) {
        const errorMessage = handleError.generateMessage(err);
        toast.error(errorMessage);
        setLoading(false);
        return dispatch(sessionActions.finish());
      }
    });
  }, [dispatch, toast]);

  return { handleToken, isLoading }
}