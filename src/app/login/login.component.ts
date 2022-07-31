
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form !: FormGroup;
  constructor(private formBuilder : FormBuilder, private route: Router, private backendApiService: BackendApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(7)]]
    })
  }

  submit() {
    this.backendApiService.login(this.form.value).subscribe((res)=>{
    this.backendApiService.accessToken = res.access;
    this.backendApiService.refreshToken = res.refresh;
    localStorage.setItem('token', this.backendApiService.accessToken);
    console.log('token', this.backendApiService.accessToken);
    console.log(res);
    this.route.navigate(['/dashboard'])}
    );
  }

}
