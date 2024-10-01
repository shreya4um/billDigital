import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {

  constructor(private local: LocalStorageService) { }


  set(key:string, value:any) {
    this.local.store(key, value);
  }

  remove(key:string) {
    this.local.clear(key);
  }

  get(key:string) {
    return this.local.retrieve(key);
  }

  clear() {
    this.local.clear();
  }
  
  getObserver(key:string){
    return this.local.observe(key);
  }
}
