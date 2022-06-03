import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prefix = 'I am a '; // Class variables... without const, let, var
  name = 'star student';

  speak() {
    const sentence = this.prefix + this.name; // Method variables... must be iitialize with const, let or var
    return sentence;
  }

  colors: string[] = ['red', 'blue', 'green', 'purple'];

  subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
  honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
  bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};

  cars:Car[] = [this.subaru, this.honda, this.bmw];
}
