import { LoadingActionTypes } from './LoadingActionTypes';

// State
export type ILoadingState = {
    loading: boolean;
    loadingSession: boolean;
}

// Actions
type SetLoadingSession = {
    type: typeof LoadingActionTypes.SET_LOADING_SESSION;
    payload: boolean;
}
type SetLoading = {
    type: typeof LoadingActionTypes.SET_LOADING;
    payload: boolean;
}
export type ILoadingAction = SetLoadingSession | SetLoading;