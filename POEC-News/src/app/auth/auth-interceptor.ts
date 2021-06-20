import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
 
const TOKEN_HEADER_KEY = 'x-access-token';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(private authService: AuthService) { }
 
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        if (this.authService.isConnected()) {
            const token = this.authService.getToken();
            if (token != null) {
                //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) }); //
                authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
            }
        }
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];