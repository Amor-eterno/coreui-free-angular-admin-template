import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'app-payment-link',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ReactiveFormsModule, FormsModule,FormSelectDirective, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective],
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
