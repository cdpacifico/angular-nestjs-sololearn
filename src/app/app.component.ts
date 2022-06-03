import { Component } from '@angular/core';

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
}
