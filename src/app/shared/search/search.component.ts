import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CityService } from 'src/app/services/city.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  searchTextUpdate = new Subject<string>();
  locations: any;
  errorMsg: string = '';
  $searchList!: Observable<any>;


  constructor(
    private weatherService: WeatherService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.onSubmit('');

    this.searchTextUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      if (text) {
        this.$searchList = this.weatherService.getSearchList({ search: text });
      } else {
        this.$searchList = of([]);
      }
    });

  }

  onSubmit(searchText: string) {
    this.locations = JSON.parse(localStorage.getItem('locations')!) || [];

    if (searchText) {
      this.weatherService.getWeather({ search: searchText }).subscribe({
        next: (response) => {
          if (response) {
            this.cityService.updateCities(this.locations, response);
            this.errorMsg = '';
          }
        },
        error: (error) => { this.errorMsg = error.error.error.message }
      })
    }
  }

  onSelect(item: any) {
    this.searchText = item.name;
    this.$searchList = of([]);
  }
}
