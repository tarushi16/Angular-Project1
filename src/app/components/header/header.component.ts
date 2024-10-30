
import { Router } from '@angular/router';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
togglePages() {
throw new Error('Method not implemented.');
}
toggleInsurances() {
throw new Error('Method not implemented.');
}
toggleBlog() {
throw new Error('Method not implemented.');
}
  isMenuOpen = false;
  menuItems = ['Home', 'Pages', 'Insurances', 'Blog', 'Contact Us'];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(menu: string) {
    
    console.log(`${menu} dropdown toggled`);
  }
}
