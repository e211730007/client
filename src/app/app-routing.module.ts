import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IdentityComponent } from './identity/identity.component';
import { HeartFailurePredictionComponent } from './heart-failure-prediction/heart-failure-prediction.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ArticlesComponent } from './articles/articles.component';
import { ManagementComponent } from './management/management.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationForRegistrationComponent } from './application-for-registration/application-for-registration.component';


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
