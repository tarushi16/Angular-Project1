import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-plans',
  templateUrl: './insurance-plans.component.html'
})
export class InsurancePlansComponent {
  benefits = [
    'Protective Protection',
    'Money Back Guarantee',
    'Homeowner Insurance',
    'Partnership System',
    'Consultations',
    'Safety Ensure'
  ];
}
