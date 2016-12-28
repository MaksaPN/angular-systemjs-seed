import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User, UserLoginModel } from '../models/user';
import { Config } from '../config';
import { BaseService } from '../services/base.service';

@Injectable()
export class UserService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    isUserLoggedIn(): boolean {
        var isUserLoggedIn = !!localStorage.getItem('auth_token');
        return isUserLoggedIn;
    }

    getLoggedUser(): User {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return JSON.parse(currentUser);
        }
        return null;
    }

    getToken(): string {
        return localStorage.getItem('auth_token');
    }

    setLoggedUser(userModel: UserLoginModel): void {
        localStorage.setItem("currentUser", JSON.stringify(userModel.user));
        localStorage.setItem("auth_token", JSON.stringify(userModel.token));
    }

    login(user: User): Observable<UserLoginModel> {
        return this.http
            .post(this.apiUrl + 'users/login', user)
            .map((response: Response) => response.json() as UserLoginModel)
            .catch(this.handleError);
    }

    logout(): void {
        localStorage.clear();
    }

    get(id: Number): Observable<User> {
        return this.http
            .get(this.apiUrl + 'users/' + id)
            .map((response: Response) => response.json() as User)
            .catch(this.handleError);
    }
}
