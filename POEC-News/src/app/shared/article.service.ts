import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../classes/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: string = 'http://localhost:8080/articles/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getArticlesWithLimitAndOffset(limit:number, offset: number): Observable<Article[]> {
    let API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, {limit, offset})
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  getArticles(): Observable<Article[]> {
    let API_URL = `${this.url}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  getArticlesParCategorie(categoryId: number): Observable<Article[]> {
    let API_URL = `${this.url}par-categorie/${categoryId}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  getArticlesParAuteur(userId: number): Observable<Article[]> {
    let API_URL = `${this.url}par-auteur/${userId}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  addArticle(data: Article): Observable<any> {
    let API_URL = `${this.url}add/`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getArticle(id: number): Observable<Article> {
    let API_URL = `${this.url}${id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  updateArticle(id: number, data: Article): Observable<any> {
    let API_URL = `${this.url}${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

  deleteArticle(id: number): Observable<any> {
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
