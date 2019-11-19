import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'recipe-book';
  selectedSection:string = 'recipe';
  
  OnSelectSection(event) {
    this.selectedSection = event;
  }
}
