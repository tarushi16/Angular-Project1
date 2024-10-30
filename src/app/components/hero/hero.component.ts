import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  
  constructor() {}
  onGetStarted() {
    console.log("Get Started button clicked");
  }

  onContactUs() {
    console.log("Contact Us button clicked");
  }
}
