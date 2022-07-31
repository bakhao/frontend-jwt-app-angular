import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !:FormGroup;
  constructor(private formBuilder : FormBuilder, private router: Router,private backendApiService: BackendApiService) { }
  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(7)]]
    })
  }


  signup(){
    this.backendApiService.signin(this.signupForm.value)
    .subscribe(() => {
      alert("Sign up is successfull");
      this.signupForm.reset();
      this.router.navigate(['login']) })
      ;
  }

}
