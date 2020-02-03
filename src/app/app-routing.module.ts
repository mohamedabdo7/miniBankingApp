import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then( m => m.AccountsPageModule)
  },
  {
    path: 'accountdetails/:id',
    loadChildren: () => import('./pages/accountdetails/accountdetails.module').then( m => m.AccountdetailsPageModule)
  },
  {
    path: 'monthlystatements',
    loadChildren: () => import('./pages/monthlystatements/monthlystatements.module').then( m => m.MonthlystatementsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
