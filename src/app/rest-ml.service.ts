import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



const endpoint = 'https://api.mercadolibre.com/sites/MCO/';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://angular-heroku-deploy.herokuapp.com',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestMLService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProduct(search: string): Observable<any> {
    return this.http.get(`${endpoint}search?q=<${search}`).pipe(
      map(this.extractData));
  }

}
