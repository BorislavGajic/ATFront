import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CreateAgentService} from '../services/create-agent.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  ChatForm = this.formBuilder.group({
    sender: [''],
    receivers: [''],
    replyTo: [''],
    content: [''],
    performative: ['']
  });
  performatives: any = [];
  agents: any = [];
  agentz: any = [];
  text = '';

  constructor(private formBuilder: FormBuilder, private createAgentService: CreateAgentService) {
    createAgentService.messages.subscribe(msg => {
      let tmp = '';
      for (const rec of msg.receivers) {
        tmp += rec.name + '(' + rec.type.name + '),';
      }
      console.log(msg.performative + ' from: ' + msg.sender.name + '(' + msg.sender.type.name + ') to: ' + tmp
        + ' content: ' + msg.content);
      this.text += msg.performative + ' from: ' + msg.sender.name + '(' + msg.sender.type.name + ') to: ' + tmp
        + ' content: ' + msg.content + '\n';
    });
  }

  ngOnInit(): void {
    this.performatives = [];
    this.getAllPerformatives();
    this.agents = [];
    this.getAllAgents();
  }

  // tslint:disable-next-line:typedef
  getAllPerformatives() {
    this.createAgentService.getAllPerformatives()
      .subscribe((data: {}) => {
          this.performatives = data;
        }
      );
  }

  // tslint:disable-next-line:typedef
  getAllAgents(){
    this.createAgentService.getAllAgents()
      .subscribe((data: {}) => {
          this.agents = data;
        }
      );
  }

  // tslint:disable-next-line:typedef
  open() {
    console.log(this.ChatForm.value);
    this.createAgentService.fireMessage(this.ChatForm.value).subscribe();
  }
}
