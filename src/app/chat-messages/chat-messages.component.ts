import { Component, Input, OnInit } from "@angular/core";
import { Messages } from "../models/messages.model";
import { ChatMessagesService } from "../services/chat-messages.service";
import { GenericResponseModel } from "../models/genericResponse.model";

@Component({
    "selector":"app-chat-messages",
    "templateUrl":"./chat-messages.component.html",
    "styleUrl":"./chat-messages.component.css"
})

export class ChatMessagesComponent implements OnInit {
    public isInvalidMessage: boolean = false;
    public isToShowInitialMessage: boolean = true;
    @Input() userId !: number;

    constructor(private chatMessagesService: ChatMessagesService){};

    public allMessages: Array<Messages> = [];

    ngOnInit(): void {
        this.chatMessagesService.startSession(this.userId)
            .subscribe( (response: GenericResponseModel) => {
                const messages: Array<Messages> = response.result["messages"];
                if(messages.length > 0){
                    this.isToShowInitialMessage = false;
                    this.allMessages = messages;
                };
        });
    };

    public sendMessage(): void{

        const textArea = document.getElementById('user-input');
        let message = textArea["value"];
        console.log("message: " + message);

        if(message.trim().length === 0){
            this.isInvalidMessage = true;
        } else {
            this.isInvalidMessage = false;
            
            this.chatMessagesService.sendMessage(this.userId, message)
                .subscribe( (response: GenericResponseModel) => {
                    const messages = response.result["messages"];
                    if(messages.length > 0){
                        this.allMessages = messages;
                        this.isToShowInitialMessage = false;
                    };
            })
        };

    };

    public scrollToBottom(){

    };
}