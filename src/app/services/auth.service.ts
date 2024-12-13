import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { AuthModel } from "../models/auth.model";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";


@Injectable({
    "providedIn":"root"
})

export class AuthService {
    constructor(private storageService:StorageService, private httpClient: HttpClient) {}

    public login(passwordKey: string): Observable<boolean> {
        const url = "/api/users/auth";
        const body = { secretKey: passwordKey };
    
        return this.httpClient.post(url, body).pipe(
            map(response => {
                console.log(response);
                return true; // Or any logic based on `response`
            }),
            catchError(error => {
                console.error(error);
                return of(false); // Emit `false` in case of an error
            })
        );
    }
    

            // if(passwordKey === "CAIO_TESTANDO"){
        //     const authObject: AuthModel = {
        //         isUserAuthenticated: true,
        //         passwordKey: passwordKey
        //     };
            
        //     this.storageService.saveToken(authObject);
        //     return true;
        // };

        // return false;


    public verifyLogin(): boolean{
        const authObject: AuthModel = this.storageService.getToken();
        if(authObject === null) { return false};

        if(authObject.isUserAuthenticated){
            return true;
        };

        return false;
        
    };


    public logout(): boolean {
        const authObject: AuthModel = this.storageService.getToken();
        if(authObject){
            this.storageService.removeToken();
            return true;
        };

        return false;
    }

    
}