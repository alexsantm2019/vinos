import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  public message: string = '';
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {
    this.validateForm();
  }

  validateForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.UserService.login(this.username, this.password).subscribe(
      (resp) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        this.router.navigate(['vinoLista']);
      },
      (err) => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      }
    );
  }
}
