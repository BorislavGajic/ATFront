import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentNavbarComponent } from './agent-navbar/agent-navbar.component';
import { AgentSidebarComponent } from './agent-sidebar/agent-sidebar.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AgentNavbarComponent, AgentSidebarComponent],
  exports: [AgentNavbarComponent, AgentSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class AgentCompModule { }
