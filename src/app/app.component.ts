import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';

 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string;

  cars: Car[];

  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  addCar() {
    const newCar: Car = { make: 'Tesla', model: 'Model X', miles: 100 };
    this.transportationService.addCar(newCar);
  }
}
