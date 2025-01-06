import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { TOKEN_KEY } from '../services/user.service';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const storageToken = localStorage.getItem(TOKEN_KEY)
  const token = storageToken ? JSON.parse(storageToken): ''
  const login = req.url.includes('/auth')

  if(login){
    return next(req);
  }
  

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(req).pipe(
    catchError((error: any) => {
      if(error instanceof HttpErrorResponse){
        if(error.status === 401){
          console.error(`Unauthorized request: ${error.statusText}`)
          router.navigate(['/login'])
        }else{
          console.error(`HTTP error: ${error.statusText}`)
        }
      }else{
        console.error(`An error occurred: ${error}`)
      }
      return throwError(() => error)
    })
  )
};
