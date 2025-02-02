import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiSigninService } from './api-signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  signIn: FormGroup;
  signin = inject(ApiSigninService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.signIn = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.signin
      .signin(this.signIn.value.name, this.signIn.value.password)
      .subscribe((res) => {
        if (res.status === 'Succsess') {
          this.router.navigate(['/dashboard']);
          this.signin.auth();
        } else {
          alert(res.message);
        }
      });
  }
}
