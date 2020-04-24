import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  constructor() { }

  getName() {
    return window.localStorage.username;
  }
  getResult() {
    return window.localStorage.count;
  }
}
