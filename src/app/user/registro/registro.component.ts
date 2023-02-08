import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
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

  register() {
    this.UserService.register(this.username, this.password).subscribe(
      (resp) => {
        console.log('Successfully registered');
        this.message = resp.msg;
        this.router.navigate(['login']);
      },
      (err) => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      }
    );
  }
}
