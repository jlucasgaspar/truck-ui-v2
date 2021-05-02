import { Company } from './Company';

export namespace ICompany {
    export namespace HttpRequest {
        export type CreateBody = Omit<Company,'id'|Timestamps>;
    }

    export namespace FormFields {
        export type Create = Omit<Company, 'id'|'logo_url'|'address'|Timestamps> & Logo & AddressOptionsFields;
    }

    // Don't export these types below. Internal use only;
    type Timestamps = 'created_at'|'updated_at';
    type Logo = { logo?: File; }
    type AddressOptionsFields = {
        addressComplement: string;
        addressNumber: number;
        addressStreet: string;
        state: string;
    }
};