import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { QaComponent } from './qa/qa.component';
import { GeneralComponent } from './general/general.component';
import { OperateComponent } from './operate/operate.component';
import { NewsComponent } from './news/news.component';
import { PartnerComponent } from './partner/partner.component';
import { FeeComponent } from './fee/fee.component';
import { VsComponent } from './vs/vs.component';
import { AboutComponent } from './about/about.component';
import { NoteComponent } from './note/note.component';
import { PurposesComponent } from './purposes/purposes.component';
import { InsureComponent } from './insure/insure.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LoginComponent } from './login/login.component';
import { TiroComponent } from './tiro/tiro.component';
import { ExpertComponent } from './expert/expert.component';
import { DriveComponent } from './drive/drive.component';
import { RecruitComponent } from './recruit/recruit.component';
import { MethodComponent } from './method/method.component';
import { ProcessComponent } from './process/process.component';
import { OrientationComponent } from './orientation/orientation.component';
import { TeachComponent } from './teach/teach.component';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OurServiceComponent,
    NavComponent,
    FooterComponent,
    QaComponent,
    GeneralComponent,
    OperateComponent,
    NewsComponent,
    PartnerComponent,
    FeeComponent,
    VsComponent,
    AboutComponent,
    NoteComponent,
    PurposesComponent,
    InsureComponent,
    PrivacyComponent,
    LoginComponent,
    TiroComponent,
    ExpertComponent,
    DriveComponent,
    RecruitComponent,
    MethodComponent,
    ProcessComponent,
    OrientationComponent,
    TeachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2DatetimePickerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
