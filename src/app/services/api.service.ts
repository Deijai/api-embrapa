import { HttpClient, HttpHeaders } from '@angular/common/http';
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


    const body = {
      cartao,
      competenciaInicial,
      competenciaFinal,
    };
    console.log('body: ', body);
    return this.http.post<Carteira>(`${url}`, body, {
      withCredentials: false,
      responseType: 'json'
    });
  }
}
