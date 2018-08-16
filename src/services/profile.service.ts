import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from "../models";

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) {}

    getProfile(signum: string) {
        return this.http.get(`http://localhost:3000/api/eride/profile/get/${signum}`);
    }

    addProfile(profile: Profile) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/eride/profile/add', profile, { headers: headers });
    }

    updateProfile(signum: string, profile: Profile) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`http://localhost:3000/api/eride/profile/update/${signum}`, profile, { headers: headers });
    }

}