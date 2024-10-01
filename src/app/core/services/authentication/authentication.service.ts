import { Injectable } from '@angular/core';
import { RequestService } from '@http/request.service';
import { User } from '@models/user/user.model';
import { StorageHelperService } from '@shared-services/storage-helper/storage-helper.service';

import { map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn: boolean = false;
  user:User | undefined;
  constructor(private request: RequestService, private storage: StorageHelperService) {
    this.storage.getObserver('user').subscribe((user:User)=>{
      this.loggedIn = user && !!user.token;
    })
  }

  authenticate(credentials: { username: string, password: string }) {
    return this.request.post('/authenticate', credentials).pipe(
      map(res => res.access_token),
      tap((token)=> this.setToken(token))      
    );
  }

  setToken(token:string){
    this.storage.set('token', token);
  }

  setUser(user:User){
    this.storage.set('user', user);
  }

  getAuthToken():string{
    return this.storage.get('token');
  }

}
