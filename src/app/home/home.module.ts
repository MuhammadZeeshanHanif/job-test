import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeContainerComponent, AddUserComponent, ListUserComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [ListUserComponent],
})
export class HomeModule {}
