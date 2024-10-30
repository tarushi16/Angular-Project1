import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Mesiva Sccot',
      role: 'Marketing Ex.',
      image: 'src/assets/images/expert_1.png',
      socialLinks: [
        { iconClass: 'fab fa-facebook-f', link: '#' },
        { iconClass: 'fab fa-twitter', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin-in', link: '#' }
      ]
    },
    {
      name: 'Jason Thomson',
      role: 'Marketing Ex.',
      image: 'src/assets/images/expert_2.png',
      socialLinks: [
        { iconClass: 'fab fa-facebook-f', link: '#' },
        { iconClass: 'fab fa-twitter', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin-in', link: '#' }
      ]
    },
    {
      name: 'Kohn Wright',
      role: 'Marketing Ex.',
      image: 'src/assets/images/expert_3.png',
      socialLinks: [
        { iconClass: 'fab fa-facebook-f', link: '#' },
        { iconClass: 'fab fa-twitter', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin-in', link: '#' }
      ]
    },
    {
      name: 'Andrew Schimke',
      role: 'Marketing Ex.',
      image: 'src/assets/images/expert_4.png',
      socialLinks: [
        { iconClass: 'fab fa-facebook-f', link: '#' },
        { iconClass: 'fab fa-twitter', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin-in', link: '#' }
      ]
    }
  ];
}
