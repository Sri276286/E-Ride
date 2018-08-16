import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ride } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class RideService {
    constructor(private http: HttpClient) { }

    listRides() {
        return this.http.get('http://localhost:3000/api/eride/ride/get');
    }

    listRidesByType(ride_type: string): Observable<Array<Ride>> {
        return this.http.get<Array<Ride>>(`http://localhost:3000/api/eride/ride/${ride_type}`);
    }

    listRidesBySignum(signum: string) {
        return this.http.get(`http://localhost:3000/api/eride/ride/get/${signum}`);
    }

    listRidesBySignumAndType(signum: string, ride_type: string) {
        return this.http.get(`http://localhost:3000/api/eride/ride/get/${signum}/${ride_type}`);
    }

    addRide(ride: Ride) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/eride/ride/add', ride, { headers: headers });
    }

    updateRide(ride_id: number, ride: Ride) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`http://localhost:3000/api/eride/ride/update/${ride_id}`, ride, { headers: headers });
    }

    deleteRide(ride_id: number) {
        return this.http.delete(`http://localhost:3000/api/eride/ride/delete/${ride_id}`);
    }

    filterRidesByLocation(ride_type: string, start_location: string) {
        const searchParams = new HttpParams().set('location', start_location);
        return this.http.get(`http://localhost:3000/api/eride/ride/${ride_type}`, { params: searchParams });
    }
}