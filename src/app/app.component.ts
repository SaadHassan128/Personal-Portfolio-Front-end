import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu?.classList.toggle('active');
  }
}
