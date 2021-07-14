import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { IdentityComponent } from './identity/identity.component';
import { ManagementComponent } from './management/management.component';



@NgModule({
  declarations: [ContactComponent,IdentityComponent,ManagementComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactComponent,IdentityComponent,ManagementComponent]
})
export class UsersModule { }
