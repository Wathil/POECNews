import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../classes/Login';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8080/users/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  user = new BehaviorSubject<User>(new User({category:2}));

  constructor(private httpClient: HttpClient) { }

  getUsersLogin(data: Login): Observable<User[]> {
    let API_URL = `${this.url}/login/`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

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
    let API_URL = `${this.url}${id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  updateUser(id: number, data: User): Observable<any> {
    let API_URL = `${this.url}${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

<<<<<<< HEAD
  deleteUser(id: number): Observable<any> {
    let API_URL = `${this.url}${id}`;
=======
  deleteUser(id: number) {
    var API_URL = `${this.url}${id}`;
>>>>>>> 2897d423 (MAJ création)
    return this.httpClient.delete(API_URL, {responseType:"text"})
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
