import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationForRegistrationComponent } from './application-for-registration/application-for-registration.component';
import { ArticlesComponent } from './articles/articles.component';
import { HeartFailurePredictionComponent } from './heart-failure-prediction/heart-failure-prediction.component';
import { ReportingComponent } from './reporting/reporting.component';



@NgModule({
  declarations: [ApplicationForRegistrationComponent,ArticlesComponent,HeartFailurePredictionComponent,ReportingComponent],
  imports: [CommonModule],
  exports:[ApplicationForRegistrationComponent,ArticlesComponent,HeartFailurePredictionComponent,ReportingComponent],
  providers:[]
})
export class HeartFailureModule { }
