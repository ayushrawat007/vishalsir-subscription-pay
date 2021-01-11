import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostComponent } from './modules/post/post.component';
import { LoginComponent } from './login/login.component';
import { ChkUnchkComponent } from './modules/chk-unchk/chk-unchk.component';
import { IframComponent } from './ifram/ifram.component';
import { PayoutRequestComponent } from './modules/payout-request/payout-request.component';



const routes: Routes = [
  { path: '', component: DefaultComponent,
children: [
  {path: 'payoutrequest', component: PayoutRequestComponent},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostComponent},
  {path: 'checkUnchek', component: ChkUnchkComponent}
]
},
{path: 'login', component: LoginComponent},
{path: 'iframurl', component: IframComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
