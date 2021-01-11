import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TxnReportComponent } from './txn-report/txn-report.component';
import { LoginComponent } from './login/login.component';
import { TxnDataComponent } from './dashboard/txn-data/txn-data.component';
import { DefaultModule } from './layouts/default/default.module';
import { IframComponent } from './ifram/ifram.component';
import { IframelyEmbedComponent } from './iframely-embed/iframely-embed.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { PayoutRequestComponent } from './modules/payout-request/payout-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TxnReportComponent,
    LoginComponent,
    TxnDataComponent,
    IframComponent,
    IframelyEmbedComponent,
    PayoutRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , HttpClientModule
    ,  MatTabsModule
    , BrowserAnimationsModule
    , FormsModule
    , DefaultModule
    , AutocompleteLibModule
    , MatPseudoCheckboxModule
    , MatPseudoCheckboxModule
    
  ],
  exports: [MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
