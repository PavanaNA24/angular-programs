import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toggling-Button';

  isDisabled = false;
  buttonText = "Disable";

  onClick() {
    this.isDisabled = !this.isDisabled;
    if(this.isDisabled){
       this.buttonText = "Enable";
    }
    else
    {
      this.buttonText = "Disable";
    }
  }
}
