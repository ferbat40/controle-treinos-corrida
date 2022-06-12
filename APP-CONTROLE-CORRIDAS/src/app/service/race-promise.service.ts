import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Corrida } from '../model/corrida';

@Injectable({
  providedIn: 'root',
})
export class RacePromiseService {
  URL = 'http://localhost:3000/races';
  URL_PT = 'http://localhost:3000/corridas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getByRace(corridas: string): Promise<Corrida[]> {
    return this.httpClient.get<Corrida[]>(`${this.URL_PT}/${corridas}`).toPromise();
  }

  saveRace(corrida: Corrida): Promise<Corrida> {
     return this.httpClient
      .post<Corrida>(this.URL_PT, JSON.stringify(corrida), this.httpOptions)
      .toPromise();
  }

  patchRace(corrida: Corrida): Promise<Corrida> {
    return this.httpClient
      .patch<Corrida>(
        `${this.URL}/${corrida.corridas}`,
        JSON.stringify(corrida),
        this.httpOptions
      )
      .toPromise();
  }

  updateRace(corrida: Corrida): Promise<Corrida> {
    return this.httpClient
      .put<Corrida>(
        `${this.URL}/${corrida.corridas}`,
        JSON.stringify(corrida),
        this.httpOptions
      )
      .toPromise();
  }
}
