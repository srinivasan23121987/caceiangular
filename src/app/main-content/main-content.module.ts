import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from './main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexContentComponent } from '../index-content/index-content.component';
const routes: Routes = [
  {
    path: '', component: MainContentComponent, children: [
      { path: '', component: IndexContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }

];
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)

  ],
  declarations: [SidenavComponent, IndexContentComponent, HeaderComponent, MainContentComponent]
})
export class MainContentModule { }
