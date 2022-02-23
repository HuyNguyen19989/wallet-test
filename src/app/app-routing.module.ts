import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'unlock',
    loadChildren: () => import('./components/unlock-wallet/unlock-wallet.module').then(m => m.UnlockWalletModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
