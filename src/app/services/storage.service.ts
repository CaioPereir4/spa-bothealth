import { Injectable } from "@angular/core";
import { AuthModel } from "../models/authModel";

@Injectable({
    providedIn:'root'
})

export class StorageService {
    private tokenKey = "authenticationKey";

    public saveToken(token: object): void {
        const tokenString = JSON.stringify(token);
        localStorage.setItem(this.tokenKey, tokenString);
    };

    public getToken(): AuthModel | null  {
        let tokenString = localStorage.getItem(this.tokenKey);
        return JSON.parse(tokenString);
    };

    public removeToken(): void {
        return localStorage.removeItem(this.tokenKey);
    }
}