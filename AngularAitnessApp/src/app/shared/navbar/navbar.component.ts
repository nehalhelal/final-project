import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(public global :GlobalService){
  // let token = localStorage.getItem('token')
  // if(token){
  //   global.isLogin = true
  // }
  console.log(global.isLogin)
 }
 handleClick(){
  localStorage.removeItem('token')
  this.global.isLogin = false
 }
}
