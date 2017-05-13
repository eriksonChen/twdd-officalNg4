import { OrientationComponent } from './orientation/orientation.component';
import { ProcessComponent } from './process/process.component';
import { MethodComponent } from './method/method.component';
import { RecruitComponent } from './recruit/recruit.component';
import { DriveComponent } from './drive/drive.component';
// import { ExpertComponent } from './expert/expert.component';
import { TiroComponent } from './tiro/tiro.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { InsureComponent } from './insure/insure.component';
import { NoteComponent } from './note/note.component';
import { PurposesComponent } from './purposes/purposes.component';
import { AboutComponent } from './about/about.component';
import { FeeComponent } from './fee/fee.component';
import { VsComponent } from './vs/vs.component';
import { PartnerComponent } from './partner/partner.component';
import { NewsComponent } from './news/news.component';
import { OperateComponent } from './operate/operate.component';
import { GeneralComponent } from './general/general.component';
import { QaComponent } from './qa/qa.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'user',
    component: IndexComponent
  },
  {
    path:'user/service',
    component: OurServiceComponent
  },
  {
    path:'user/qa',
    component: QaComponent,
    children:[
      {path:'', redirectTo:'/user/qa', pathMatch:'full'},
      // {path:'operate', component:OperateComponent},
      {path:'', component:GeneralComponent}
    ]
  },
  {
    path:'drive',
    component: DriveComponent
  },
  {
    path:'drive/recruit',
    component: RecruitComponent,
    children:[
      {path:'', redirectTo:'/drive/recruit/method', pathMatch:'full'},
      {path:'method', component:MethodComponent},
      {path:'process', component:ProcessComponent},
      {path:'orientation', component:OrientationComponent}
    ]
  },
  {
    path:'about',
    component: AboutComponent,
    children:[
      {path:'', redirectTo:'/about/purposes', pathMatch:'full'},
      {path:'purposes', component:PurposesComponent},
      {path:'note', component:NoteComponent},
      {path:'insure', component:InsureComponent},
      {path:'privacy', component:PrivacyComponent}
    ]
  },
  {
    path:'login',
    component: LoginComponent,
    children:[
      {path:'', redirectTo:'/login/tiro', pathMatch:'full'},
      {path:':id', component:TiroComponent}
    ]
  },
  {
    path:'user/news',
    component: NewsComponent
  },
  {
    path:'user/vs',
    component: VsComponent
  },
  {
    path:'user/fee',
    component: FeeComponent
  },
  {
    path:'partner',
    component:PartnerComponent
  },
  {
    path: '',
    redirectTo:'/user',
    pathMatch:'full'
  },
  {
    path: '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
