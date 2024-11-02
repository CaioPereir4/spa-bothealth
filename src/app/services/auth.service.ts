import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { AuthModel } from "../models/authModel";


@Injectable({
    "providedIn":"root"
})

export class AuthService {
    constructor(private storageService:StorageService) {}

    public login(passwordKey : string): boolean {
        if(passwordKey === "CAIO_TESTANDO"){
            const authObject: AuthModel = {
                isUserAuthenticated: true,
                passwordKey: passwordKey
            };
            
            this.storageService.saveToken(authObject);
            return true;
        };

        return false;
    };


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