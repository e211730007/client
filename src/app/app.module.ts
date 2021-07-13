import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IdentityComponent } from './identity/identity.component';
import { HeartFailurePredictionComponent } from './heart-failure-prediction/heart-failure-prediction.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ArticlesComponent } from './articles/articles.component';
import { ManagementComponent } from './management/management.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationForRegistrationComponent } from './application-for-registration/application-for-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IdentityComponent,
    HeartFailurePredictionComponent,
    ReportingComponent,
    ArticlesComponent,
    ManagementComponent,
    ContactComponent,
    ApplicationForRegistrationComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
