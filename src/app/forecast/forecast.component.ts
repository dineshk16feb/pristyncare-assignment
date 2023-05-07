import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forcastData$!: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      const cityName = params.get('city')!
      this.forcastData$ = this.weatherService.getForcast({ search: cityName });
    });
  }
}
