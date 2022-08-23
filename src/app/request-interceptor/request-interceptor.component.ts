import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-request-interceptor',
  templateUrl: './request-interceptor.component.html',
  styleUrls: ['./request-interceptor.component.css']
})
export class RequestInterceptorComponent implements HttpInterceptor {

  constructor(private backendApiService: BackendApiService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  console.log("getTOken()  ", this.backendApiService.getToken());

    if (req.url.includes("register")) {
      return next.handle(req);
    }
    let logReq = req.clone(
      {
        setHeaders: {
          Authorization : 'Bearer ' + this.backendApiService.getToken()
        }
      }
    )
    return next.handle(logReq);

  }



}
