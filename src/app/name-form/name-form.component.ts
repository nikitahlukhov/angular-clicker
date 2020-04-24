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
    if (value) {
      console.log(value)
      this.userName = value;
      this.nameFormVisible = !this.nameFormVisible;
      this.startButtonVisible = !this.startButtonVisible;
      return
    }
    alert('Please fill in the name form')
  }

  startTimer () {
    this.startButtonVisible = !this.startButtonVisible;
    this.counterFormVisible = !this.counterFormVisible;
    var x = setInterval(() => {
    
      this.countDownTime -= 1;
      
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
