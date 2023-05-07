import { Component, Input, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  cities: any;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities.subscribe(res => {
      this.cities = res;
    })
  }
}
