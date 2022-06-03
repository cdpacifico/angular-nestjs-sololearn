import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[];

  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  counter = 0;

  increment() {
    this.counter++;
  }
}
