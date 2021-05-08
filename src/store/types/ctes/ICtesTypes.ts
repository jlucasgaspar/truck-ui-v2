import { CtesActionTypes } from './CtesActionTypes';
import { IStep } from './stepper';

// State
export type ICtesState = {
	steps: IStep[]
}

// Actions
type SetCtesStepper = {
	type: typeof CtesActionTypes.SET_CTES_STEPPER;
	payload: IStep[];
}
export type ICtesAction = SetCtesStepper;