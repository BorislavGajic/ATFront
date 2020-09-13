import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgentLayoutModule} from './agent-layout/agent-layout.module';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FlatpickrModule} from 'angularx-flatpickr';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAgentComponent,
    ChatComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AgentLayoutModule,
    FontAwesomeModule,
    FlatpickrModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
