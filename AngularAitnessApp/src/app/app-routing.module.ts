import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './pages/meals/meals.component';
import { UsersComponent } from './pages/users/users.component';
import { CartComponent } from './pages/cart/cart.component';
import { IndexComponent } from './pages/index/index.component';
import { SinglemealComponent } from './pages/singlemeal/singlemeal.component';
import { AddmealComponent } from './pages/addmeal/addmeal.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { RegistratComponent } from './pages/registrat/registrat.component';


const routes: Routes = [
  {path:'' , component : IndexComponent},

  
  {path:'meals' , children:[
    {path:'' , component : MealsComponent },
    {path:':mealId' , component :SinglemealComponent },
    {path:'addmeal' , component : AddmealComponent },
  ]},
  // {path:'meals',component: MealsComponent},
  // {path:'meals/:mealId',component:SinglemealComponent},
  
  {path:'users' , component : UsersComponent,data:{isAdmin :true}},
  {path:'registrat' , component :RegistratComponent},
  {path:'cart' , component : CartComponent},
  {path:"**" , component : ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
