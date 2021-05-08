import { User } from 'models/User';
import { UserActionTypes } from './UserActionTypes';

// State
export type IUserState = {
	user: User;
}

// Actions
type SetUser = {
	type: typeof UserActionTypes.SET_USER;
	payload: User;
}

export type IUserActions = SetUser;