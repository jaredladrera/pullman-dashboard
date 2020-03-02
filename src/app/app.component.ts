import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'pullman-dashboard';

  today = new Date();
  current: any;
  
  constructor(private datePipe: DatePipe) {
    this.current = this.datePipe.transform(this.today, 'MM/dd/yyyy');
    console.log(this.current);
  }



}
