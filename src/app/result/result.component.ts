import { Component, OnInit } from '@angular/core';
import { ClickerService } from '../services/clicker.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  userName: string;
  resultNumber: string;
  resultMessage: string;

  constructor(private clickerService: ClickerService) {
    this.userName = this.clickerService.getName();
    this.resultNumber = this.clickerService.getResult();
    this.resultMessage = `Congratulations ${this.userName} you clicked ${this.resultNumber} times`;
  }

  ngOnInit(): void {
  }
}
