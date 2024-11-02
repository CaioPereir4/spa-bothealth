import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
@Component({
    selector:"app-login",
    templateUrl: "./login.component.html",
})


export class LoginComponent implements OnInit{

    constructor(private authService: AuthService, private router: Router){};
    public secretKey = new FormControl();
    public userInvalidPassword:boolean = false;
    ngOnInit(): void {
        const isUserAuthenticated = this.authService.verifyLogin();
        if(isUserAuthenticated){
            this.router.navigate(['/chat']);
        };
    };

    public doLogin(password:string): void{
        const loginResult = this.authService.login(password);
        if(loginResult){
            this.userInvalidPassword = false;
            this.router.navigate(['/chat']);
        } else {
            this.userInvalidPassword = true;
        }
    }
    
}