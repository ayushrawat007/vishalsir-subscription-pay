import { Component, OnInit, SecurityContext, ViewChild, ElementRef } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ifram',
  templateUrl: './ifram.component.html',
  styleUrls: ['./ifram.component.css']
})
export class IframComponent implements OnInit {
  @ViewChild('iframe', {static: false}) iframe: ElementRef;
  // qfurl = 'https://services.sabpaisa.in/pages/StThomasCollege.html';
  qfurl = 'https://qwikforms.in/QwikForms/';
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer, private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.qfurl);
    // this.urlSafe = this.sanitizer.sanitize(SecurityContext.URL, this.qfurl);
}

}