import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backendApiService: BackendApiService, private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
      this.backendApiService.logout(this.backendApiService.refreshToken).subscribe(()=>{
        this.route.navigate(['/login']);
      });
  }
}
