import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //host: {ngSkipHydration: 'true'},
})
export class AppComponent {
  public title: string = 'Mi primera app en Angular';
  
}
