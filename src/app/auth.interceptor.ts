import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import {catchError, Observable, switchMap, take, throwError} from 'rxjs';
import { AuthService } from "./service/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.authStatus.pipe(
            take(1),
            switchMap((loggedIn: boolean) => {
                if(loggedIn) {
                    const token = localStorage.getItem('accessToken');
                    if(token) {
                        req = req.clone({
                            setHeaders: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                    }
                }
                return next.handle(req);
            }),
            catchError((error, caught) => {
                return throwError(error);
            })
        )
    }
}