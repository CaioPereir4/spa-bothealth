import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {path: 'home', component: ChatComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes), 
      
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
