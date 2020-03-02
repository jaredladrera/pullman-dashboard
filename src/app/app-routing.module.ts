import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { FaceDetectComponent } from './components/face-detect/face-detect.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RobotStatusComponent } from './components/robot-status/robot-status.component';
import { SoftwareUpdateComponent } from './components/software-update/software-update.component';
import { SoftwareUploadComponent } from './components/software-upload/software-upload.component';
import { SurveyComponent } from './components/survey/survey.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'facedetect', component: FaceDetectComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'robotstatus', component: RobotStatusComponent},
  { path: 'update', component: SoftwareUpdateComponent },
  { path: 'upload', component: SoftwareUploadComponent},
  { path: 'survey', component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
