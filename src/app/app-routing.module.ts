import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"services",component:ServicesComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"search",component:SearchComponent},
  {path:"",component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
