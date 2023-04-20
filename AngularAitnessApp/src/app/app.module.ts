import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { IndexComponent } from './pages/index/index.component';
import { MealsComponent } from './pages/meals/meals.component';
import { CartComponent } from './pages/cart/cart.component';
import { UsersComponent } from './pages/users/users.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SinglemealComponent } from './pages/singlemeal/singlemeal.component';
import { AddmealComponent } from './pages/addmeal/addmeal.component'
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { RegistratComponent } from './pages/registrat/registrat.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
    IndexComponent,
    MealsComponent,
    CartComponent,
    UsersComponent,
    NavbarComponent,
    SinglemealComponent,
    AddmealComponent,
    RegistratComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      // علشان يشغلها مع كل --API--
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
