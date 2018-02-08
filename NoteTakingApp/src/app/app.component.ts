import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = [
    {
      title: 'Finish Laundry',
      description: 'By midnight'
    },
    {
      title: 'Finish CS408 get the design doc done',
      description: 'DO IT'
    }
  ]
  constructor() {
    
  }
}
