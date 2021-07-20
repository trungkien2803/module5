import {Component, Input, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {
  @Input()
  time = 60;

  interval = 0;

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.interval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(this.interval);
      }
    }, 1000);

  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    clearInterval(this.interval);
    this.time = 60;
  }

}
