import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public citySubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('locations')!));
  public getCities = this.citySubject.asObservable();

  constructor(private router: Router) { }

  updateCities(locations: any[], locObj: any) {
    let index = locations.findIndex((loc: any) => loc?.location?.name === locObj?.location?.name);

    if (index === -1) {
      locations.unshift(locObj);
    } else {
      locations.splice(index, 1);
      locations.unshift(locObj);
    }

    this.citySubject.next(locations);
    localStorage.setItem('locations', JSON.stringify(locations));
  }

  clearAll() {
    this.citySubject.next(null);
    localStorage.removeItem('locations');
    this.router.navigate(['/'])
  }
}
