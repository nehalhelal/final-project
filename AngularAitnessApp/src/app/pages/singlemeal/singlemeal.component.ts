import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-c',
  templateUrl: './singlemeal.component.html',
  styleUrls: ['./singlemeal.component.css']
})
export class SinglemealComponent {
  
    _id : any
    singlemeal:any
    meals:any[]=[]
    constructor(private global :GlobalService , private _activatedRoute:ActivatedRoute  ){
  
      console.log(this._activatedRoute.snapshot.paramMap.get('singlemeal'))
    

      
      // *ActivatedRoute  ingect it in component
      //* let _id = this._activatedRoute.snapshot.paramMap.get('mealId')// not r 
  
      // this._id = this._activatedRoute.snapshot.paramMap.get('mealId')
      //   global.getSinglemeal(this._id).subscribe(data=>{
      //     this.singlemeal = data.data
      //   })
  


        // to get last 3 meals 
        this.global.getmeals().subscribe(data=>{
          this.meals = data.data
        })



  //   -activated rout- بتجيب-id- اول مره بس 

        this._activatedRoute.paramMap.subscribe(params=>{
          console.log(params)
          // ده كده -id-الجديد
          let _id = params.get('mealId')
          console.log(_id)
          global.getSinglemeal(_id).subscribe(data=>{
            this.singlemeal = data.data
          })
  
        })

       

  
    }



     // **********cart*************
    //  mealsArray :any = []
    //  handleClick(data:any){
    //   this.mealsArray.push(data)
    //   let oldCart =JSON.stringify(this.mealsArray)
    //   localStorage.setItem('cart',oldCart)
    //  }

    //  **********************
    mealsArray : any = []
    handleClick(data: any) {
  
      this.mealsArray.push(data)
  
      let oldCart = JSON.stringify(this.mealsArray)
  
  
      localStorage.setItem('cart' , oldCart)
    }
  


  
    
}
