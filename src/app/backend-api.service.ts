import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  url = "https://tranquil-temple-27643.herokuapp.com/";
  accessToken = '';
  refreshToken = '';

  constructor(private http: HttpClient) {
  }

  getResourceHello(): Observable<any> {
    return this.http.get(this.url + "hello");
  }

  login(data: any): Observable<any> {
    return this.http.post(this.url + "api/login/", data);
  }

  signin(data: any): Observable<any> {
    return this.http.post(this.url + "api/register", data);
  }

  logout(refreshToken : string): Observable<any> {
    let data = {
      "refresh_token": refreshToken
    }

    return this.http.post(this.url + "api/logout", data);
  }


  getToken() {
    return localStorage.getItem("token") || "";
  }


  ClearToken() {
    alert('Hey guys the session has expired');
    localStorage.clear();
  }

  removeToken() {
    localStorage.removeItem('token');
  }

}
