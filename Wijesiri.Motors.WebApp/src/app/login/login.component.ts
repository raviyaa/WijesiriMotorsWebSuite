import { AuthenticationService } from './../core/authentication.service';
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControlName } from '@angular/forms';
import * as _ from 'underscore';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm: FormGroup;
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.loginForm.reset();
  }

  login() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).subscribe(res => {
        if (!_.isEmpty(res.result)) {
          this.initLogin(res.result[0]);
          this.router.navigateByUrl('/dashboard');
        } else {
          console.log('error');
        }
      }, errorInfo => {
      });

    }
  }

  initLogin(user) {
    this.authenticationService.setCurrentUser(user);
    this.authenticationService.setModules(user.module);
  }
}
