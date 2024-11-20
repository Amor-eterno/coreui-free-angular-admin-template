import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./payment-link.component').then(m => m.PaymentLinkComponent),
    data: {
      title: 'Link de pago'
    }
  }
];

