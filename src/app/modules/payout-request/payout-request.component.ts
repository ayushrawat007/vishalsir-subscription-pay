import { Component, OnInit } from '@angular/core';
// import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payout-request',
  templateUrl: './payout-request.component.html',
  styleUrls: ['./payout-request.component.css']
  // providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class PayoutRequestComponent implements OnInit {
  tab1: boolean;
  tab2: boolean;
  tab3: boolean;
  btntab1: boolean;
  btntab2: boolean;
  btntab3: boolean;

  tab1back: boolean;
  tab2back: boolean;
  tab3back: boolean;

  btntabback1: boolean;
  btntabback2: boolean;
  btntabback3: boolean;
  
  
  constructor() { }

  ngOnInit(): void {
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;
    this.btntab1 = true;
    this.btntab2 = false;
    this.btntab3 = false;
  }

  toTop(event) {
    document.getElementById("tab2").scrollIntoView();
}
  Tab1() {
    this.tab1 = false;
    this.tab2 = true;
    this.tab3 = false;

    this.btntab1 = false;
    this.btntab2 = true;
    this.btntab3 = false;
    this.btntabback2 = true;
    this.btntabback3 = false;
    
  }
  Tab2() {
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = true;

    this.btntab1 = false;
    this.btntab2 = false;
    this.btntab3 = true;
    this.btntabback2 = false;
    this.btntabback3 = true;
  }

  Tab2back() {
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;

    this.btntab1 = true;
    this.btntab2 = false;
    this.btntab3 = false;
    this.btntabback2 = false;
    
  }
  Tab3() {
    // this.tab1 = false;
    // this.tab2 = false;
    // this.tab3 = false;
  }
  Tab3back() {
    this.tab1 = false;
    this.tab2 = true;
    this.tab3 = false;

    this.btntab1 = false;
    this.btntab2 = true;
    this.btntab3 = false;
    this.btntabback2 = true;
    this.btntabback3 = false;
  }
}
// export class NgbdTabsetBasic { }
