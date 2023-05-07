import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  @Input() data$!: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      const cityName = params?.city;
      this.data$ = this.weatherService.getForcast({ search: cityName, days: 1 }).pipe(
        map(res => res.forecast.forecastday[0].hour)
      );
    });
  }
}
