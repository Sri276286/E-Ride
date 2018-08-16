export class Ride {
    ride_id: number;
    signum: string;
    ride_type: string;
    service_type: string;
    vehicle_type: string;
    occurence: string;
    details?: string;
    start_location: string;
    end_location: string;
    ride_date?: string;
    no_of_seats: number;
    no_of_kms: number;
    price_per_km: number;
    landmarks?: string[]
    start_time?: string;
    end_time?: string;
}