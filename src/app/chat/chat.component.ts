import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
@Component({
    selector:'app-chat',
    templateUrl:'./chat.component.html'
})

export class ChatComponent implements OnInit{
    constructor(private authService: AuthService, private router: Router){};

    ngOnInit(): void {
        const isUserAuthenticated = this.authService.verifyLogin();
        console.log("isUserAuthenticated", isUserAuthenticated);
        if(!isUserAuthenticated){
            this.router.navigate(['/login']);
        };
    }
    
}