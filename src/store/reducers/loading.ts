import { ILoadingAction, ILoadingState, LoadingActionTypes } from 'store/types/loading';

const initialState: ILoadingState = {
	loading: false,
	loadingSession: true
}

export const loadingReducer = (state = initialState, action: ILoadingAction): ILoadingState => {
	switch (action.type) {
		case LoadingActionTypes.SET_LOADING_SESSION:
			return { ...state, loadingSession: action.payload }

		case LoadingActionTypes.SET_LOADING:
			return { ...state, loading: action.payload }

		default:
			return state;
	}
}