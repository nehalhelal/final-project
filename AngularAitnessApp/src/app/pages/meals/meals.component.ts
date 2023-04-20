import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  meals:any[] = []
  
    constructor(private global : GlobalService){
    console.log('constructor')

    this.global.getmeals().subscribe(data=>{
      console.log(data)
      this.meals = data.data
    })

  }
  ngOnInit(){
    console.log("ng on init")
  }
  


  // ********************
  // handleClick(data:any) {
  //   localStorage.setItem('cart' , JSON.stringify(data))
    
  // }
  // *****************
}
