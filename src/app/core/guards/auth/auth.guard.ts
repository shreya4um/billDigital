import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '@shared-services/authentication/authentication.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router); 
  const authenticationService:AuthenticationService = inject(AuthenticationService);  
  if(authenticationService.getAuthToken())
  return true;
  router.navigate(['/auth'])
  return false;
};
