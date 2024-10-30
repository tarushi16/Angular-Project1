import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  features = [
    {
      icon: 'assets/icons/trusted-icon.png', // Replace with your icon path
      title: 'Trusted By Thousand',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet.',
    },
    {
      icon: 'assets/icons/life-icon.png', // Replace with your icon path
      title: 'Set For Life',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet.',
    },
    {
      icon: 'assets/icons/protective-icon.png', // Replace with your icon path
      title: 'Protective Insurance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet.',
    },
  ];

  images = [
    { src: 'assets/images/family-1.jpg', alt: 'Family Image 1' }, // Replace with your image paths
    { src: 'assets/images/family-2.jpg', alt: 'Family Image 2' },
    { src: 'assets/images/family-3.jpg', alt: 'Family Image 3' },
  ];
}
