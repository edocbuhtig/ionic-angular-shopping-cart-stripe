import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cartpopup', loadChildren: './ui/cartpopup/cartpopup.module#CartpopupPageModule' },   { path: 'cartview', loadChildren: './cartview/cartview.module#CartviewPageModule' },
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsPageModule' },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
