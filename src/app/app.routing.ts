import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AgentLayoutComponent} from './agent-layout/agent-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AgentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './agent-layout/agent-layout.module#AgentLayoutModule'
      }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})

export class AppRoutingModule { }
