import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'unlock',
    loadChildren: () => import('./components/unlock-wallet/unlock-wallet.module').then(m => m.UnlockWalletModule)
  },
  {
    path: '',
    redirectTo: 'unlock',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
