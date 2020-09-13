import {Routes} from '@angular/router';
import {CreateAgentComponent} from '../create-agent/create-agent.component';
import {ChatComponent} from '../chat/chat.component';

export const AgentLayoutRutes: Routes = [
  { path: 'createAgent',      component: CreateAgentComponent },
  { path: 'chat',      component: ChatComponent }
];
