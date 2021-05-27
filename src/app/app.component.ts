import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buttons-app';

  montar1(): any {
    console.log('montar 1');
  }

  desmontar1(): any {
    console.log('desmontar 1');
  }

  montar2(): any {
    console.log('montar 2');
  }

  desmontar2(): any {
    console.log('desmontar 2');
  }
}
