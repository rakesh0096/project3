import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'users',component:UsersComponent},
  {path:'products',component:ProductsComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'',component:LogOutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
