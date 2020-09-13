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

  createAgent(type, name): Observable<any> {
    return this.http.put('http://localhost:8080/agents/running/' + type + '/' + name, this.httpOptions );
  }
}
