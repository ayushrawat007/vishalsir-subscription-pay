import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keyword;
  constructor() { }
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35
    },
    {
      name: 'Mcleod  Mueller',
      age: 32
    },
    {
      name: 'Day  Meyers',
      age: 21
    },
    {
      name: 'Aguirre  Ellis',
      age: 34
    },
    {
      name: 'Cook  Tyson',
      age: 32
    }
  ];
  data = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    }
 ];
  ngOnInit(): void {
  }
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
}
