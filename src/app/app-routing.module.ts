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
    path: 'send',
    loadChildren: () => import('./components/send/send.module').then(m => m.SendModule)
  },
  {
    path: '',
    redirectTo: 'send',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
