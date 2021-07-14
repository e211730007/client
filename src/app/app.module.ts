import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeartFailureModule } from './heart-failure/heart-failure.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,HeartFailureModule,UsersModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
