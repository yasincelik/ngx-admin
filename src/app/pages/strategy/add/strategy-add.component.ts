import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'strategy-add.component.html',
  styleUrls: ['strategy-add.component.scss'],
})
export class StrategyAddComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;

  // radioGroupValue1: 'Buy';
  radioGroupValue2: 'ThreeLineStrike';

  buySellOptions = [
    { value: 'Buy', label: 'Buy' },
    { value: 'Sell', label: 'Sell' },
  ];
  bsoption;

  buyOptions = [
    { value: 'ThreeLineStrike', label: 'Three Line Strike' },
    { value: 'MorningStar', label: 'Morning Star' },
    { value: 'EveningStar', label: 'Evening Star' },
    { value: 'AscendingTriangle', label: 'Ascending Triangle' },
    { value: 'Breakout', label: 'Breakout' },
    { value: 'PullBack', label: 'Pull Back' },
    { value: 'HammerCandlestick', label: 'Hammer Candlestick' },
    { value: 'BullishEngulfingCandlestick', label: 'Bullish Engulfing Candlestick' },
    { value: 'BullishHaramiCandlestick', label: 'Bullish Harami Candlestick' },
    { value: 'CustomRules', label: 'Custom Rules' },
    { value: 'CodeJava', label: 'Code your own rule (Java)' },
  ];
  boption;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

    this.fourthForm = this.fb.group({
      fourthCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  onFourthSubmit() {
    this.fourthForm.markAsDirty();
  }

  // showBuy(){
  //   document.getElementById('buyStrategy').style.display ='block';
  // }
  // function showSell(){
  //   document.getElementById('div1').style.display = 'block';
  // }
}
