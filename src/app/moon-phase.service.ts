import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoonPhaseService {

  private apiUrl = environment.apiUrl;  //  Это включенно в GitIgnore
  private apiKey = environment.apiKey;  //  Это включенно в GitIgnore

  constructor(private http: HttpClient) {}

  getMoonPhase(date: string): Observable<any> {
    const params = {
      date: date,
      api_key: this.apiKey
    };
    return this.http.get(this.apiUrl, { params });
  }
}