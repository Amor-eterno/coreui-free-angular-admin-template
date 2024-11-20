import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-link',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-link.component.html',
  styleUrl: './payment-link.component.scss'
})
export class PaymentLinkComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });


   }




   onSubmit() {
    if (this.form.valid){
      const payload = this.form.value;
    }
    
    }
   }
