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
  timeNow: any;
  loginStatus: boolean = true;

 formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
  
  constructor(private datePipe: DatePipe) {
    this.current = this.datePipe.transform(this.today, 'MM/dd/yyyy');

    setInterval(() => {
      this.timeNow = this.formatAMPM(new Date);
    }, 100);
  }

}
