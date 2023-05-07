import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getSearchList(paramKeys: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('key', environment.API_KEY);
    if (paramKeys?.search) {
      params = params.append('q', paramKeys.search);
    }

    return this.http.get(`${environment.API_URL}/search.json`, { params: params });
  }

  getWeather(paramKeys: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('key', environment.API_KEY);
    params = params.append('aqi', 'no');
    if (paramKeys?.search) {
      params = params.append('q', paramKeys.search);
    }

    return this.http.get(`${environment.API_URL}/current.json`, { params: params });
  }

  getForcast(paramKeys: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('key', environment.API_KEY);
    params = params.append('aqi', 'no');
    params = params.append('alerts', 'no');
    if (paramKeys?.search) {
      params = params.append('q', paramKeys.search);
    }
    if (paramKeys?.days) {
      params = params.append('days', paramKeys.days);
    }

    return this.http.get(`${environment.API_URL}/forecast.json`, { params: params });
  }

}
