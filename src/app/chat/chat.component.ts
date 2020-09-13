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
  constructor(private formBuilder: FormBuilder, private createAgentService: CreateAgentService) { }

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
    console.log(JSON.stringify(this.ChatForm.value));
    this.createAgentService.fireMessage(this.ChatForm.value).subscribe();
  }
}
