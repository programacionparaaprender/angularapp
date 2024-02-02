import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjetacredito';
import { Responsetarjeta } from '../models/responsetarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myAppUrl2 = "https://localhost:5001/api/tarjeta/";
  myApiUrl = "https://localhost:7107/api/tarjeta/";
  KEYTOKEN = "KEYTOKEN";
  constructor(private http: HttpClient) {
    
  }

  getListTarjetas(): Observable<Responsetarjeta>{
    return this.http.get<Responsetarjeta>(this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<TarjetaCredito> {
    return this.http.delete<any>(this.myApiUrl + String(id));
  }
  
  saveTarjeta(tarjeta: any): Observable<TarjetaCredito> {
      return this.http.post<TarjetaCredito>(this.myApiUrl, tarjeta);
  }

  updateTarjeta(tarjeta: TarjetaCredito, id: number): Observable<any> {
    return this.http.put<any>(this.myApiUrl + `${id}`, tarjeta);
  }
}
