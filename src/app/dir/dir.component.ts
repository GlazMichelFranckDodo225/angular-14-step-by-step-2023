import { Component } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: [
  ]
})

export class DirComponent {
  num: number;
  colors: any[] | undefined;
  color: string | undefined;

  constructor() {
    this.num = 2;
    this.colors = ['red', 'blue', 'yellow'];
    this.color = '';
  }
}
