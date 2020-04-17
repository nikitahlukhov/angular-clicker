import { Component } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent {
  userName: string
  countDownTime = 10
  counter = 0
  resultMessage: string
  nameFormVisible = true
  startButtonVisible = false
  counterFormVisible = false
  resultFormVisible = false


  saveName(value) {
    this.userName = value;
    this.nameFormVisible = !this.nameFormVisible;
    this.startButtonVisible = !this.startButtonVisible;
  }

  startTimer () {
    this.startButtonVisible = !this.startButtonVisible;
    this.counterFormVisible = !this.counterFormVisible;
    var x = setInterval(() => {
    
      // Find the distance between now and the count down date
      this.countDownTime -= 1;
      console.log(this.countDownTime)
      // If the count down is finished, write some text
      if (this.countDownTime == 0) {
        clearInterval(x);
        this.resultMessage = `Congratulations ${this.userName} you clicked ${this.counter} times`;
        this.counterFormVisible = !this.counterFormVisible;
        this.resultFormVisible = !this.resultFormVisible;
      }
    }, 1000);
  }

  count () {
    this.counter += 1;
  }
}
