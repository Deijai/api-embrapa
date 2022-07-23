import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carteira } from '../interfaces';

const url =
  'http://200.202.187.2:8089/services/service_componenteUtilizacaoServicosPINSS.ijs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCarteira(
    cartao: string,
    competenciaInicial: string,
    competenciaFinal: string
  ): Observable<Carteira> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

      const url_params = new HttpParams()
      .set('rejectUnauthorized', 'false')
      .set('requestCert', 'false')
      .set('insecure', 'true')


    const body = {
      cartao,
      competenciaInicial,
      competenciaFinal,
    };
    console.log('headers: ', headers, 'body: ', body);
    return this.http.post<Carteira>(`${url}`, body, {
      headers: headers,
      withCredentials: false,
      reportProgress: false,
      responseType: 'json',
      params: url_params,
      observe: 'body',
    });
  }
}
