import { Vehicle } from './Vehicle';

export namespace IVehicle {
    export namespace FormFields {
        export type Create = Omit<Vehicle, 'id'|'company_id'|'created_at'|'updated_at'>;
    }

    type Timestamps = 'created_at'|'updated_at';
}