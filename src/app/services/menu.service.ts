import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMenu } from '../models/responsemenu';
import { Responsetarjeta } from '../models/responsetarjeta';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  myAppUrl2 = "https://localhost:5001/";
  myApiUrl = "https://localhost:7107/api/menu/";
  KEYTOKEN = "KEYTOKEN";
  constructor(private httpClient: HttpClient) {

  }

  getMenus(): Observable<ResponseMenu> {
    return this.httpClient.get<ResponseMenu>(this.myApiUrl);
  }

  async lista() {
    var response;
    try{
        const token = localStorage.getItem('token');
        console.log('token: ' + token);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });
        const requestOptions = { headers: headers };
        response = await this.httpClient.get<ResponseMenu[]>(this.myApiUrl).toPromise();
        //response = await this.httpClient.get<ResponseMenu[]>(this.myApiUrl, requestOptions).toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
      }catch(e: unknown | any){
        return e.response;
      }
    return response;
  }

}
