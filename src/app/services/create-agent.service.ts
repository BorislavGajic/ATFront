import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

const CHAT_URL = 'ws://localhost:8080/AT-Chat-war/wsMessage';
const AGENT_URL = 'ws://localhost:8080/AT-Chat-war/ws';

export interface Message {
  receivers: any[];
  sender: any;
  performative: string;
  content: string;
}

export interface UserEvent {
  id: any[];
}


@Injectable({
  providedIn: 'root'
})
export class CreateAgentService {
  public messages: Subject<Message>;
  public agents: Subject<UserEvent>;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.messages = (configService.connect(CHAT_URL).pipe(map(
      (response: MessageEvent): Message => {
        const data = JSON.parse(response.data);
        return {
          receivers: data.receivers,
          sender: data.sender,
          performative: data.performative,
          content: data.content
        };
      }
    )) as Subject<any>);

    this.agents = (configService.connectOnline(AGENT_URL).pipe(map(
      (response: MessageEvent): UserEvent => {
        // const data = JSON.parse(response.data);
        return {
          id: response.data
        };
      }
    )) as Subject<UserEvent>);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createAgent(ad): Observable<any> {
    return this.http.put<any>('http://localhost:8080/AT-Chat-war/rest/agents/running/' + ad.type + '/' + ad.name, null);
  }

  getAllPerformatives(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/AT-Chat-war/rest/messages');
  }

  fireMessage(mes): Observable<any> {
    return this.http.post<any>('http://localhost:8080/AT-Chat-war/rest/messages', mes);
  }

  getAllAgents(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/AT-Chat-war/rest/agents/running');
  }
}
