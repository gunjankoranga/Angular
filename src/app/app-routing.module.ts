import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowCartComponent } from './show-cart/show-cart.component';

const routes: Routes = [
  {
  path:"home",
  component:HomeComponent
  },
  {
    path:"addcart/:pname",
    component:CartComponent
  },
  {
    path:"showCart",
    component:ShowCartComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
