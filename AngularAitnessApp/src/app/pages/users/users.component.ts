import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    
  }

  msgError = null
  isAdmin:any
  constructor(private global : GlobalService , private router : Router, private Activatedroute: ActivatedRoute){
// *********************
    this.Activatedroute.data.subscribe(res => {
      console.log(res)
        this.isAdmin = res['isAdmin']
        if(this.isAdmin == 'false') 
        console.log(this.isAdmin)
    })
// ****************************



  }
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
