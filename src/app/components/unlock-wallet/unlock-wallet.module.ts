import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlockWalletComponent } from './unlock-wallet.component';
import { RouterModule, Routes } from '@angular/router';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


const routes: Routes = [
  {
    path: '',
    component: UnlockWalletComponent
  }
];

const ANT_MODULE = [
  NzInputModule,
  NzButtonModule
]

@NgModule({
  declarations: [
    UnlockWalletComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...ANT_MODULE
  ]
})
export class UnlockWalletModule { }


