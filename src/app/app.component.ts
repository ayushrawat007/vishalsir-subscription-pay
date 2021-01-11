import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import xml2js from 'xml2js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('iframe') iframe: ElementRef;
  title = 'angular Test';
  public xmlItems: any;
  loading: boolean;
  index: any;
  Account: clientAccountDetails;
  masterSelected: boolean;
  checklist: any;
  checkedList: any;
  counter: number;
  constructor(private _http: HttpClient) {  
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
  ngOnInit() {
    // alert('88');
    // this. AdminPortal();
    this.loading = false;
    this.loadXML();
  }
  loadXML() {
    let startTime = new Date().getTime();
    let timeDiff = 0;
    this.loading = true;
    this._http.get('/assets/users.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers',
          'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            const endTime = new Date().getTime();
            timeDiff = ((endTime - startTime) / 60);
            setTimeout(() => {
              this.loading = false;
            }, 2000);
            this.xmlItems = data;
          });
      });
  }
  parseXML(data) {
    return new Promise(resolve => {
      let k: string | number, arr = [], parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function(err, result) {
        const obj = result.Employee;
        for (k in obj.emp) {
          const item = obj.emp[k];
          arr.push({id: item.id[0],name: item.name[0],gender: item.gender[0], mobile: item.mobile[0]});
        }
        resolve(arr);
      });
    });
  }
  EditRecord(j: any) {
    // alert(j);
    console.log(j);
    // this.index = j.index;
    // alert(this.index);
    this.Account = this.xmlItems[j];
    alert(this.Account.name);
  }
  DeleteRecord(i: any) {
    console.log(i);
    this.xmlItems.splice(i, 1);
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
      if (this.checklist[i].isSelected) {
      this.checkedList.push(this.checklist[i]);
      }
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
  getSelectedRec(){
  this.counter = 0;
  for (var i = 0; i < this.checklist.length; i++) {
    if (this.checklist[i].isSelected) {
      this.counter = Number(this.counter) + 1 ;
      alert(this.checklist[i].value);
    }
  }
  alert(this.counter);
}
// ngAfterViewInit() {
//   this.iframe.nativeElement.setAttribute('src', 'https://admin.sabpaisa.in/#/login');
//  }
 AdminPortal() {
  this.iframe.nativeElement.setAttribute('src', 'https://admin.sabpaisa.in/#/login');
 }
 ReportPortal() {
  this.iframe.nativeElement.setAttribute('src', 'https://partner.sabpaisa.in/#/login');
 }
 COB() {
  this.iframe.nativeElement.setAttribute('src', 'https://spl.sabpaisa.in/clientOnBoarding/login');
 }
}
export interface clientAccountDetails {
  id: string;
  name: string;
  gender: string;
  mobile: string;
}
