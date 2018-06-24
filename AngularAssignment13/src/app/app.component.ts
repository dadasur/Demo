import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title;
  public fun()
  {
    this.title = "Inside root componant";
    return this.title;
  }
  
      
}
