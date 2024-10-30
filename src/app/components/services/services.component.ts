import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      image: 'src/assets/images/family_pic_4.png', 
      category: 'INSURANCE • VEHICLE',
      title: 'Business Insurance',
    },
    {
      image: 'src/assets/images/family_pic_5.png', 
      category: 'INSURANCE • VEHICLE',
      title: 'Vehicle Insurance',
    },
    {
      image: 'src/assets/images/family_pic_6.png', 
      category: 'INSURANCE • CAR',
      title: 'Car Insurance',
    },
  ];
}
