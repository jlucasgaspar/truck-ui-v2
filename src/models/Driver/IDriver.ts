import { Driver } from './Driver';

export namespace IDriver {
    export namespace HttpRequest {
        export type CreateBody = Omit<Driver,'id'|'company_id'|Timestamps>;
        export type UpdateBody = Omit<Driver, Timestamps>;
    };

    export namespace Store {
        export type DriversList = Driver[];
        export type CurrentDriver = Driver;
    };

    export namespace FormFields {
        export type Create = Omit<Driver,'id'|'company_id'|'photo_url'|Timestamps> & PhotoFile;
        export type Update = Omit<Driver,'photo_url'> & PhotoFile & ChangePhotoOption;
    };

    // Don't export these types below. Internal use only;
    type Timestamps = 'created_at' | 'updated_at';
    type PhotoFile = { photo?: File; }
    type ChangePhotoOption = { changePhoto: 'y' | 'n'; }
};