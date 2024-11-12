import { Component, OnInit } from "@angular/core";
import { Messages } from "../models/messages.model";

@Component({
    "selector":"app-chat-messages",
    "templateUrl":"./chat-messages.component.html",
    "styleUrl":"./chat-messages.component.css"
})

export class ChatMessagesComponent implements OnInit {
    public isInvalidMessage: boolean = false;
    public isToShowInitialMessage: boolean = false;

    public allMessages: Array<Messages> = [
        {isBot: true, isHuman: false, text: "Oi, tudo bem? "},
        {isHuman: true, isBot: false, text: "Meu paciente está com problemas preciso de uma ajuda sua"},
        {isBot: true, isHuman: false, text: "Claro, como o Dr.Botinho pode te ajudar?"},
        {isHuman: true, isBot: false, text: "Pode indicar os melhores remédios para gripe?"}
    ];

    ngOnInit(): void {
        if(this.allMessages.length == 0){
            this.isToShowInitialMessage = true;
        };
    };



    public sendMessage(): void{

        const textArea = document.getElementById('user-input');
        let message = textArea["value"];
        console.log("message: " + message);

        if(message.trim().length === 0){
            this.isInvalidMessage = true;
        } else {
            this.isInvalidMessage = false;
            this.isToShowInitialMessage = false;
        };

    }
}