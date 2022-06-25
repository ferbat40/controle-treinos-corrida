import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ErrorUtil } from './../util/error-util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../model/marca';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root',
})
export class MarcaObservable {
  URL = RoutesAPI.MARCAS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Marca> {
      
    return this.httpClient.get<Marca>(`${this.URL}/${id}`)
                                     
    
  }

  
  


  save(transaction: Marca): Observable<Marca> {
    return this.httpClient.post<Marca>(
      this.URL,
      transaction,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  patch(transaction: Marca): Observable<Marca> {
    return this.httpClient.patch<Marca>(
      this.URL,
      transaction,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );;
  }

  
  update(marca: Marca): Observable<Marca> {
      return this.httpClient.put<Marca>(
      `${RoutesAPI.MARCAS}/${marca.id}`,
      marca,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  delete(marca: Marca): Observable<Marca> {
      return this.httpClient.delete<Marca>(
      `${RoutesAPI.MARCAS}/${marca.id}`,
       this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }


}
