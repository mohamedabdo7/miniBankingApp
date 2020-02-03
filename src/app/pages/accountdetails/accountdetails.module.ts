import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AccountdetailsPageRoutingModule } from './accountdetails-routing.module';

import { AccountdetailsPage } from './accountdetails.page';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccountdetailsPageRoutingModule
  ],
  declarations: [AccountdetailsPage]
})
export class AccountdetailsPageModule {}
