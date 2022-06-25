import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Corrida } from '../model/corrida';
import { Suplemento } from '../model/suplemento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RacePromiseService {
  

  URL = 'http://localhost:3000/sraces';
  URL_PT = 'http://localhost:3000/scorridas';
  URL_SUPL = 'http://localhost:3000/suplementos';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Suplemento> {
      
    return this.httpClient.get<Suplemento>(`${this.URL_SUPL}/${id}`)
                                     
    
  }

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
        `${this.URL}/${corrida.id}`,
        JSON.stringify(corrida),
        this.httpOptions
      )
      .toPromise();
  }

  updateRace(corrida: Corrida): Promise<Corrida> {
    return this.httpClient
      .put<Corrida>(
        `${this.URL_PT}/${corrida.id}`,
        JSON.stringify(corrida),
        this.httpOptions
      )
      .toPromise();
  }
  


  deleteRace(corrida: Corrida): Promise<Corrida> {
    return this.httpClient
      .delete<Corrida>(
        `${this.URL_PT}/${corrida.id}`,
        this.httpOptions
      )
      .toPromise();
  }
}
