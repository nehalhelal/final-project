import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // **********cart*************
  // mealsArray :any = []
  // handleClick(data:any){
  //  this.mealsArray.push(data)
  //  let oldCart =JSON.stringify(this.mealsArray)
  //  localStorage.setItem('cart',oldCart)
  // }



  mealsArray: any = []
  cart: string = ''

  constructor() {
    this.cart = localStorage.getItem('cart') as string
    // console.log(cart)
    console.log(typeof(JSON.parse(this.cart)))
    this.mealsArray = JSON.parse(this.cart)
  }
  deleteMeal(i:any) {
    this.mealsArray.splice(i,1)
    // this.meals.delete()
   }
}
