import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentLayoutComponent } from './agent-layout.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgentCompModule} from '../agent-comp/agent-comp.module';
import {AgentLayoutRutes} from './agent-layout.routing';
import {FlatpickrModule} from 'angularx-flatpickr';



@NgModule({
  declarations: [AgentLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AgentLayoutRutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    AgentCompModule
  ],
  exports: [AgentLayoutComponent
  ]
})
export class AgentLayoutModule { }
