import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

import { NzCardModule } from 'ng-zorro-antd/card';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
]

const ANT_MODULE = [
  NzCardModule 
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...ANT_MODULE
  ]
})
export class MainModule { }
