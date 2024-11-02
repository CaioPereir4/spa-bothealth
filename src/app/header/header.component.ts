import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {  Router } from "@angular/router";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    constructor(private authService: AuthService, private router: Router ){};
    public doLogout(){
        const resultOfLogout = this.authService.logout();
        if(resultOfLogout){
            this.router.navigate(['/login']);
        } else {
            alert("Problems to do logout!");
            this.router.navigate['/login']
        }
    }
}