import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Register } from 'src/app/interfaces/register';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-registrat',
  templateUrl: './registrat.component.html',
  styleUrls: ['./registrat.component.css']
})
export class RegistratComponent {
  model : Register = {
    fname: '',
    lname: '',
    email: '',
    password : '',
    age : 18,
    gender: null,
    phone : '',
    addresses : ''
  }
  modellog : User  ={
    email : this.model.email,
    password : this.model.password
  }
  msgError=null

  constructor(private global : GlobalService , private router : Router){}

  handleSubmit(form: NgForm){

    if(form.valid){

      
      this.global.register(this.model).subscribe( res=>{
        if(res.apiStatus){
          alert('user Add  Successfully')
         const modellog ={
            email : this.model.email,
            password : this.model.password
          }
        
          this.global.login(modellog).subscribe(res=>{
            console.log(res)
              
            localStorage.setItem('token' , res.data.token)
            // this.global.isLogin = true
                if(res.apiStatus) this.router.navigateByUrl('')
          },
          (e)=>{
            this.msgError = e.error.message
          }
          )
        
      }
      },
      (e)=>{
        this.msgError = e.error.message
      }
      )
    }

  }



  // **********************-----
  // modelu : User ={
  //   email:'',
  //   password:'',
    
  // }

  // msgError = null
  // isAdmin:any
  // constructor(private global : GlobalService , private router : Router, private Activatedroute: ActivatedRoute){

  //   this.Activatedroute.data.subscribe(res => {
  //     console.log(res)
  //       this.isAdmin = res['isAdmin']
  //       if(this.isAdmin == 'false') 
  //       console.log(this.isAdmin)
  //   })




  // }
  // handleSubmit(form : NgForm){
  //   console.log(form)
  //   if(form.valid){
  //     this.global.login(this.model).subscribe(res=>{
  //       console.log(res)



  //       localStorage.setItem('token' , res.data.token)
  //       this.global.isLogin = true
  //       if(res.message == "success") this.router.navigateByUrl('')
  //     }, (e)=>{
  //       console.log(e.error.message)
  //       this.msgError = e.error.message
  //     })
  //   }
  // }
  // ****************************-----

}
