import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CreateAgentService} from '../services/create-agent.service';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {

  AgentForm = this.formBuilder.group({
    type: [''],
    name:['']
  });
  classes = ['Ping', 'Pong', 'Initiator', 'Participant'];
  constructor(private formBuilder: FormBuilder, private createAgentService: CreateAgentService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  open() {
    console.log(this.AgentForm.value.type, this.AgentForm.value.name);
    this.createAgentService.createAgent(this.AgentForm.value.type, this.AgentForm.value.name).subscribe();
  }

}
