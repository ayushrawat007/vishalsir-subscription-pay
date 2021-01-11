import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PostComponent } from 'src/app/modules/post/post.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChkUnchkComponent } from 'src/app/modules/chk-unchk/chk-unchk.component';


@NgModule({
  declarations: [
    DefaultComponent
    , HomeComponent
    , PostComponent
    , ChkUnchkComponent
  ],
  imports: [
    CommonModule
    , RouterModule
    , FlexLayoutModule
    , SharedModule
    , FormsModule
  ]
})
export class DefaultModule { }
