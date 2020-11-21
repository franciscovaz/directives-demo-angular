import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {

  choice:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setChoice(choice) {
    this.choice = choice;
  }

}
