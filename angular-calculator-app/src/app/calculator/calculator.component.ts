import { Component, OnInit } from '@angular/core';
import {Calculation} from '../calculation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculation: Calculation = {
    number: '0',
  };
  constructor() { }

  ngOnInit() {
  }
  result(){
    // tslint:disable-next-line:no-eval
    return eval(this.calculation.number);
  }
}
