import { User } from 'models/User'

export namespace IUser {
    export namespace HttpRequest {
        export type CreateBody = Pick<User,'id'|'name'|'email'|'phone'>;
    };

    export namespace Store {
        export type Authenticated = Pick<User,'id'|'company_id'|'name'|'email'> & UserClaims;
    };

    export namespace FormFields {
        export type SignUp = Pick<User,'name'|'email'|'phone'> & Password & ConfirmPassword;
        export type Login = Pick<User,'email'> & Password;
    };

    // Don't export these types below. Internal use only;
    type Password = { password: string; }
    type ConfirmPassword = { confirmPassword: string; }
    type UserClaims = {
        role: string;
        company_name: string;
        company_id: string;
        company_logo_url: string;
    }
};