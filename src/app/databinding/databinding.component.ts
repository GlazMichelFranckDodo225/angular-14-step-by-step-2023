import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
  ]
})

export class DatabindingComponent implements OnInit {
  name: string;
  company: string;
  site: string;

  constructor() {
    this.name = 'Mohan';
    this.company = 'DNT';
    this.site = 'https://www.scholarhat.com'
  }

  Greet() {
    alert(`Hi, ${this.name}`);
  }

  ngOnInit(): void {

  }
}
