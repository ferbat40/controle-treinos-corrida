import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { Corridax } from '../model/corridax';

@Injectable({
  providedIn: 'root',
})
export class MarcaObservableService {
  URL = RoutesAPI.MARCAS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Corridax> {
    return this.httpClient.get<Corridax>(`${this.URL}/${id}`);
  }

  save(marca: Corridax): Observable<Corridax> {
    return this.httpClient.post<Corridax>(
      this.URL,
      marca,
      this.httpOptions
    );
  }

  patch(marca: Corridax): Observable<Corridax> {
    return this.httpClient.patch<Corridax>(
      this.URL,
      marca,
      this.httpOptions
    );
  }

  update(marca: Corridax): Observable<Corridax> {
    return this.httpClient.put<Corridax>(
      this.URL,
      marca,
      this.httpOptions
    );
  }
}
