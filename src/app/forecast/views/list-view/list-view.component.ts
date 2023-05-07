import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  data$!: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      const cityName = params?.city;
      this.data$ = this.weatherService.getForcast({ search: cityName, days: 7 }).pipe(
        map(res => res.forecast.forecastday)
      );
    });
  }
}
