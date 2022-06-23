import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;
  constructor(private currency: CurrencyService) {
    this.currency.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
