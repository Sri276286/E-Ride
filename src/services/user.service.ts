import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../models";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    listUsers() {
        return this.http.get('http://localhost:3000/api/eride/user/get');
    }

    addUser(user: User) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/eride/user/register', user, { headers: headers });
    }

    editUser(signum: string, user: User) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`http://localhost:3000/api/eride/user/edit/${signum}`, user, { headers: headers });
    }

    deleteUser(signum: string) {
        return this.http.delete(`http://localhost:3000/api/eride/user/delete/${signum}`);
    }
}