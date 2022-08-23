import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  varHello = '';
  constructor(private backendApiService: BackendApiService) { }

  ngOnInit(): void {
    this.varHello = this.hello();
  }

  hello(): string {
      this.backendApiService.getResourceHello()
      .subscribe((data) => {
           console.log(data);
           this.varHello = data;
      });
      return this.varHello;
  }




}
