import { Component, OnInit } from '@angular/core';


interface People {
  name: string;
  age: number;
  city: string;
  picture: string;
}

@Component({
  selector: 'app-ngforof-demo',
  templateUrl: './ngforof-demo.component.html',
  styleUrls: ['./ngforof-demo.component.css']
})
export class NgforofDemoComponent implements OnInit {

  people: Array<People>;

  imgStyles = {
    'height': '100px',
    'width': '100px',
    'border-radius': '12px',
    'margin': '5px'
  }

  constructor() { }

  ngOnInit(): void {
    this.people = [
      { name: 'Francisco', age: 25, city: 'Gafanha de Aquém', picture:'/assets/images/francisco.jpg' },
      { name: 'Vaz', age: 33, city: 'Gafanha de Aquém', picture:'/assets/images/capaTulha.jpg' },
      { name: 'Logitech Name', age: 17, city: 'Aquém', picture:'/assets/images/nogeres.jpg' },
      { name: 'Tomás', age: 52, city: 'Gafanha', picture:'/assets/images/francisco.jpg' },
    ]
  }

  getCssClass(age: number) {
    if(age >=18) {
      return 'text-success'
    } else {
      return 'text-danger'
    }
  }

  deletePerson(index: number){
    this.people.splice(index, 1)
  }

}
