import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  model : User ={
    email:'',
    password:'',
    // address :{
    //   city:'',
    //   country:''
    // }
  }

  // modelData = {
  //   email : 'nehal.helal777@gmail.com',
  //   password : '1234567',
  //   address : {
  //     city : '',
  //     country : '' 
  //   }
  // }
  msgError = null
  constructor(private global : GlobalService , private router : Router){}
  handleSubmit(form : NgForm){
    console.log(form)
    if(form.valid){
      this.global.login(this.model).subscribe(res=>{
        console.log(res)



        localStorage.setItem('token' , res.data.token)
        this.global.isLogin = true
        if(res.message == "success") this.router.navigateByUrl('/meals')
        // if(res.isAdmin == "false") this.router.navigateByUrl('/cart')
      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }
}
