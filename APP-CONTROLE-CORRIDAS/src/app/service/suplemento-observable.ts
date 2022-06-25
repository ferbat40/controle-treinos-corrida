import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ErrorUtil } from '../util/error-util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suplemento } from '../model/suplemento';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root',
})
export class SuplementoObservable {
  URL = RoutesAPI.SUPLEMENTOS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}
 // http://localhost:3000/suplementos?marcaId=910
  getById(id: number): Observable<Suplemento> {
    return this.httpClient.get<Suplemento>(`${this.URL}?marcaId=${id}`)
    .pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  save(transaction: Suplemento): Observable<Suplemento> {
    return this.httpClient.post<Suplemento>(
      this.URL,
      transaction,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  patch(transaction: Suplemento): Observable<Suplemento> {
    return this.httpClient.patch<Suplemento>(
      this.URL,
      transaction,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );;
  }

  
  update(marca: Suplemento): Observable<Suplemento> {
      return this.httpClient.put<Suplemento>(
      `${RoutesAPI.SUPLEMENTOS}/${marca.id}`,
      marca,
      this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  delete(suplemento: Suplemento): Observable<Suplemento> {
      return this.httpClient.delete<Suplemento>(
      `${RoutesAPI.SUPLEMENTOS}/${suplemento.id}`,
       this.httpOptions
    ).pipe(
      catchError(ErrorUtil.handleError)
    );
  }


}
