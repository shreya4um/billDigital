import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  apiUrl:string = `${environment.baseUrl}/api/${environment.apiVersion}`
  constructor(private http: HttpClient) { }


  post(endpoint:string, params?:any): Observable<any> {    
    return this.http
      .post(this.apiUrl + endpoint, params).pipe(
        switchMap((response: any) => {
          return of(response)
        }), catchError(errorResponse => {
          return throwError(errorResponse.error);
        }));
}

get(endpoint:string, params?:any): Observable<any> {
let queryParams = this.toParam(params);
queryParams = (queryParams) ? '?' + queryParams : '';
    return this.http
      .get(this.apiUrl + endpoint + queryParams).pipe(
        switchMap((response: any) => {
          if (response.success) {
            return of(response);
          } else {
            return throwError(response.errors);
          }
        }), catchError(errorResponse => {              
          return throwError(errorResponse.errors || errorResponse);
        }));
}

private toParam(obj:any) {
if (obj) {
  return Object.keys(obj).map(key => {
    const val = obj[key];
    const prefix = encodeURIComponent(key);
    return Array.isArray(val)
      ? _toPhpQueryArray(val, prefix)
      : _toPhpQueryObject(val, prefix);
  }).join('&');


  function _toPhpQueryArray(arr:Array<any>, prefix:string) {
    return arr.map(v => prefix + '[]=' + encodeURIComponent(v)).join('&');
  }

  function _toPhpQueryObject(value:any, prefix:string):any {
    if (typeof value === 'object' && value) {
      return Object.keys(value).map(k => _toPhpQueryObject(value[k], prefix + '[' + encodeURIComponent(k) + ']')).join('&');
    } else {
      return prefix + '=' + encodeURIComponent(value);
    }
  }
}
else {
  return null;
}
}
}
