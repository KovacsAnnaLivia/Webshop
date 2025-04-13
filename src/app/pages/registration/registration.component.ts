import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required]),
    name: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  });
  
  isLoading = false;
  showForm = true;
  registrationError = '';

  constructor(private router: Router) {}

  registration(): void {
    if (this.registrationForm.valid) {
      this.registrationError = 'A regisztrációs adatok rendben vannak!';
      
    }else{
      if (this.registrationForm.get('email')?.hasError('required')) {
        this.registrationError = 'Az email megadása kötelező!';
      } else if (this.registrationForm.get('email')?.hasError('email')) {
        this.registrationError = 'Érvénytelen email formátum!';
      } else if (this.registrationForm.get('name.firstname')?.hasError('required')) {
        this.registrationError = 'A keresztnév megadása kötelező!';
      } else if (this.registrationForm.get('name.lastname')?.hasError('required')) {
        this.registrationError = 'A vezetéknév megadása kötelező!';
      } else if (this.registrationForm.get('password')?.value !== this.registrationForm.get('rePassword')?.value) {
        this.registrationError = 'A jelszavak nem egyeznek!';
      } else {
        this.registrationError = 'Valami nem jó';
      }
      
    }

    const password = this.registrationForm.get('password');
    const rePassword = this.registrationForm.get('rePassword');

    if (password?.value !== rePassword?.value) {
      this.registrationError = 'A jelszavak nem egyeznek!';
      return;
    }

    this.isLoading = true;
    this.showForm = false;

    const newUser: User = {
      name: {
        firstname: this.registrationForm.value.name?.firstname || '',
        lastname: this.registrationForm.value.name?.lastname || ''
      },
      email: this.registrationForm.value.email || '',
      password: this.registrationForm.value.password || '',
    };

    console.log('New user:', newUser);
    console.log('Form value:', this.registrationForm.value);



    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2000);
  }
}
