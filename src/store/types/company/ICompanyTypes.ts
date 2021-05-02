import { Company } from 'models/Company';
import { CompanyActionTypes } from './CompanyActionTypes';

// State
export type ICompanyState = {
    company: Company;
}

// Actions
type SetCompany = {
    type: typeof CompanyActionTypes.SET_COMPANY;
    payload: Company;
}

export type ICompanyActions = SetCompany;