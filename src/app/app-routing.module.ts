import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IdentityComponent } from './users/identity/identity.component';
import { HeartFailurePredictionComponent } from './heart-failure/heart-failure-prediction/heart-failure-prediction.component';
import { ReportingComponent } from './heart-failure/reporting/reporting.component';
import { ArticlesComponent } from './heart-failure/articles/articles.component';
import { ManagementComponent } from './users/management/management.component';
import { ContactComponent } from './users/contact/contact.component';
import { ApplicationForRegistrationComponent } from './heart-failure/application-for-registration/application-for-registration.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent},
  { path: "contact", component: ContactComponent},
  { path: "identity", component: IdentityComponent},
  { path: "application-for-registration", component: ApplicationForRegistrationComponent},
  { path: "heartFailurePrediction", component: HeartFailurePredictionComponent},
  { path: "reporting", component: ReportingComponent},
  { path: "articles", component: ArticlesComponent},
  { path: "management", component: ManagementComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
