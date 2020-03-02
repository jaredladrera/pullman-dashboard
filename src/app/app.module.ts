import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FaceDetectComponent } from './components/face-detect/face-detect.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SoftwareUpdateComponent } from './components/software-update/software-update.component';
import { SoftwareUploadComponent } from './components/software-upload/software-upload.component';
import { RobotStatusComponent } from './components/robot-status/robot-status.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FaceDetectComponent,
    ChatbotComponent,
    SurveyComponent,
    SoftwareUpdateComponent,
    SoftwareUploadComponent,
    RobotStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
