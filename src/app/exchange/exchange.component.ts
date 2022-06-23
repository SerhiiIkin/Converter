import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {
  @Input() data: any;
  inputOneValue = '1';
  inputTwoValue = '1';
  selectOneValue = '1';
  selectTwoValue = '1';
  error: any;

  constructor() {}

  ngOnInit(): void {}

  onInputOneValueChange(event: any) {
    event.target.value = this.checkValue(event.target.value);
    const stringValue = event.target.value.toString();
    this.inputOneValue = this.sliceString(stringValue);

    this.inputTwoValue = this.calculateAnotherInput(
      +event.target.value,
      +this.selectOneValue,
      +this.selectTwoValue
    );
  }

  onInputTwoValueChange(event: any) {
    event.target.value = this.checkValue(event.target.value);
    const stringValue = event.target.value.toString();
    this.inputTwoValue = this.sliceString(stringValue);

    this.inputOneValue = this.calculateAnotherInput(
      +event.target.value,
      +this.selectTwoValue,
      +this.selectOneValue
    );
  }

  onSelectOneChange(event: any) {
    const value = event.target.value;
    const formula = (
      (+this.inputTwoValue * +this.selectTwoValue) /
      +value
    ).toString();
    this.selectOneValue = event.target.value;

    if (value == this.selectTwoValue) {
      this.inputOneValue = this.inputTwoValue;
    } else {
      this.inputOneValue = this.sliceString(formula);
    }
  }

  onSelectTwoChange(event: any) {
    const value = event.target.value;
    const formula = (
      (+this.inputOneValue * +this.selectOneValue) /
      +value
    ).toString();
    this.selectTwoValue = event.target.value;

    if (value == this.selectOneValue) {
      this.inputTwoValue = this.inputOneValue;
    } else {
      this.inputTwoValue = this.sliceString(formula);
    }
  }

  calculateAnotherInput(
    thisInputValue: any,
    thisSelect: any,
    anotherSelect: any
  ) {
    const formula = ((thisInputValue * thisSelect) / anotherSelect).toString();
    const result = this.sliceString(formula);

    return result !== '0' ? result : '';
  }

  checkValue(value: string) {
    const regex = /^(([0-9])|(\d+\.{0,1}\d*))$/;

    if (!regex.test(value)) {
      this.error = 'You can enter only numbers!';

      return value.slice(0, -1);
    }
    this.error = '';

    return value;
  }

  sliceString(str: string) {
    return str?.indexOf('.') !== -1 ? str.slice(0, str.indexOf('.') + 3) : str;
  }
}
