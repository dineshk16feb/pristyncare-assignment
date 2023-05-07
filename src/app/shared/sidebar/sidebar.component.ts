import { Component } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  searchText: string = '';

  constructor(public cityService: CityService){}

  searchTextUpdate(text: string) {
    this.searchText = text;
  }
}
