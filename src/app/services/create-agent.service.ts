import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAgentService {

  constructor(private http: HttpClient, private configService: ConfigService) { }
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
