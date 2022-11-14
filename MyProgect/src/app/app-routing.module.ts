import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
  path:"home",
  component:HomePage
},
  {
    path:"login",
    component:LoginPage
  },
  {
    path:"register",
    component:RegisterPage
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
