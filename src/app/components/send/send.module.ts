import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send.component';
import { RouterModule, Routes } from '@angular/router';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';




const routes: Routes = [
  {
    path: '',
    component: SendComponent
  }
];

const ANT_MODULE = [
  NzPageHeaderModule
]

@NgModule({
  declarations: [
    SendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...ANT_MODULE
  ]
})
export class SendModule { }
