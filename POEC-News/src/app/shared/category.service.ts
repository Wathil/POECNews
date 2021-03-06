import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from '../classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = 'http://localhost:8080/categories/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    let API_URL = `${this.url}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  addCategory(data: Category): Observable<any> {
    let API_URL = `${this.url}add/`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getCategory(id: number): Observable<Category> {
    let API_URL = `${this.url}${id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  updateCategory(id: number, data: Category): Observable<any> {
    let API_URL = `${this.url}${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

  deleteCategory(id: number): Observable<any> {
    let API_URL = `${this.url}${id}`;
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
