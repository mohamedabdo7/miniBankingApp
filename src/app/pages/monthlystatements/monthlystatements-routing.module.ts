import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlystatementsPage } from './monthlystatements.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlystatementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlystatementsPageRoutingModule {}
