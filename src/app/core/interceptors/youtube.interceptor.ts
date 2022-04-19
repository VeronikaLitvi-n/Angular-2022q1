import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YoutubeInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const API_KEY = 'AIzaSyB7WYDtNTcAaSDFJW4F93UPs212iIwTiJI';
    const URL = 'https://www.googleapis.com/youtube/v3';
    return next.handle(
      request.clone({
        url: `${URL}/${request.url}`,
        setParams: {
          key: API_KEY,
        },
      })
    );
  }
}
