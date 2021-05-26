import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url: string = 'http://localhost:8080/users/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    let API_URL = `${this.url}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  addUser(data: User): Observable<any> {
    let API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getUser(id: number): Observable<User> {
    let API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  updateUser(id: number, data: User): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

  deleteUser(id: number): Observable<any> {
    var API_URL = `${this.url}/${id}`;
    return this.httpClient.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
