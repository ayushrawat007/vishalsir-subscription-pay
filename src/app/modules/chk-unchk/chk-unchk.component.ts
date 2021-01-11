import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chk-unchk',
  templateUrl: './chk-unchk.component.html',
  styleUrls: ['./chk-unchk.component.css']
})
export class ChkUnchkComponent implements OnInit {
  masterSelected: boolean;
  checklist: any;
  checkedList: any;
  epType: string;
  constructor() { 
    this.masterSelected = false;
      this.checklist = [
      {id:1,value:'Elenor Anderson',isSelected:false},
      {id:2,value:'Caden Kunze',isSelected:true},
      {id:3,value:'Ms. Hortense Zulauf',isSelected:true},
      {id:4,value:'Grady Reichert',isSelected:false},
      {id:5,value:'Dejon Olson',isSelected:false},
      {id:6,value:'Jamir Pfannerstill',isSelected:false},
      {id:7,value:'Aracely Renner DVM',isSelected:false},
      {id:8,value:'Genoveva Luettgen',isSelected:false}
      ];
      this.getCheckedItemList();
  }

  ngOnInit(): void {
  }
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
  switch(day) {
   if (day === 1 || day === 2 || day === 6 || day === 12) {
     this.epType = 'CARD';
   } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 4) {
    this.epType = 'COLLECT CASH';
  } else if (day === 5) {
    this.epType = 'CHALLAN';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } else if (day === 3) {
    this.epType = 'NET_BANKING';
  } 
  }
}
