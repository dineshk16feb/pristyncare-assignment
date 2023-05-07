import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dateTime!: Date;

  constructor() {
    setInterval(() => this.dateTime = new Date(), 1000);
  }
}
