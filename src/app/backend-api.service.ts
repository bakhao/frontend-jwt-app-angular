import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  url = "http://localhost:8000/";
  accessToken = '';
  refreshToken = '';

  constructor(private http: HttpClient) {
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
}
