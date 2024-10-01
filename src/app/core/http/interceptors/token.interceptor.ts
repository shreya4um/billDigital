import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '@shared-services/authentication/authentication.service';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authenticationService = inject(AuthenticationService);
  console.log(authenticationService.getAuthToken());
  if(authenticationService.getAuthToken()){
    req = req.clone({
      headers: req.headers.set('AccessToken', `${authenticationService.getAuthToken()}`),
    });
  }    
  return next(req);
};
