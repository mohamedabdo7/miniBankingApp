import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlystatementsPageRoutingModule } from './monthlystatements-routing.module';

import { MonthlystatementsPage } from './monthlystatements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlystatementsPageRoutingModule
  ],
  declarations: [MonthlystatementsPage]
})
export class MonthlystatementsPageModule {}
