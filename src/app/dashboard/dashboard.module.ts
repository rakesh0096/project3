import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SectionComponent, FooterComponent, UsersComponent, ProductsComponent, MyProfileComponent, LogOutComponent, AddUserComponent, AddProductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
