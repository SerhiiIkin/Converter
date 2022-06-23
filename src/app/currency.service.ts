import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getData() {
    let URL =
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
    return this.http.get(URL);
  }
}
