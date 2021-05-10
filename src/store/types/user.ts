import { User } from "models";

// Actions Types List;
export enum UserActionsTypes {
  SET_USER = "SET_USER"
}

// State;
export type UserState = {
  user: User.Model;
}

// Actions;
export type UserActions = SetUser;

type SetUser = { type: typeof UserActionsTypes.SET_USER; payload: User.Model }