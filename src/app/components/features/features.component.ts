import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  features = [
    {
      icon: 'src/assets/images/svg1.PNG',
      title: 'Money Back Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      icon: 'src/assets/images/svg2.PNG',
      title: 'All Claims At Anytime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      icon: 'src/assets/images/svg3.PNG',
      title: 'Digital Insurance Policy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      icon: 'src/assets/images/svg4.PNG',
      title: 'Direct Payment App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    }
  ];
}
