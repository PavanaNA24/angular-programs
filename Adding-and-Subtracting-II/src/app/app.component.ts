import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;

  result: number;

  onClickAdd() {
    this.result = this.num1 + this.num2;
  }

  onClickSub() {
    this.result = this.num1 - this.num2;
  }
  title = 'Adding-and-Subtracting-II';
}
