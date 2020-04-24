import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  countDownTime = 10;
  counter = 0;

  count() {
    this.counter += 1;
  }
  startTimer() {
    const x = setInterval(() => {
      this.countDownTime -= 1;
      if (this.countDownTime === 0) {
        clearInterval(x);
        window.localStorage.count = this.counter;
        this.router.navigate(['/result']);
      }
    }, 1000);
  }

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.startTimer();
  }
}
