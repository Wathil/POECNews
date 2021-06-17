import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Commentaire } from '../classes/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  url = 'http://localhost:8080/commentaires/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getCommentairesByUserId(userId: number): Observable<Commentaire[]> {
    const API_URL = `${this.url}byuserid/${userId}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  getCommentairesByArticleId(articleId: number): Observable<Commentaire[]> {
    const API_URL = `${this.url}byarticleid/${articleId}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  getCommentaire(id: number): Observable<Commentaire> {
    const API_URL = `${this.url}${id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  addCommentaire(data: Commentaire): Observable<any> {
    const API_URL = `${this.url}add/`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  updateCommentaire(id: number, data: Commentaire): Observable<any> {
    const API_URL = `${this.url}${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => console.log('service :' + res)),
        catchError(this.errorMgmt)
      );
  }

  deleteCommentaire(id: number): Observable<any> {
    const API_URL = `${this.url}${id}`;
    return this.httpClient.delete(API_URL, {responseType:'text'})
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
