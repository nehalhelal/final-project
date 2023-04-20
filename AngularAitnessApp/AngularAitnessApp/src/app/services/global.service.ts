import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getmeals():Observable<any>{
    // return this.http.get("https://jsonplaceholder.typicode.com/posts")
    return this.http.get("http://localhost:3007/api/meal")
  }
  getSinglemeal(mealId:any):Observable<any>{
    // send  it in parameter ${mealId}
    return this.http.get(`http://localhost:3007/api/meal/singleMeal/${mealId}`)
  }

  // getGallery():Observable<any>{
  //   return this.http.get('https://jsonplaceholder.typicode.com/photos')

  // }
  baseUrl = "http://localhost:3007/api/"
  isLogin = false
//  ****************
updateImage(obj:any):Observable<any>{
  // if(localStorage.getItem('token')){
  //   let headers = new HttpHeaders().set('Authorization' , `Bearer ${localStorage.getItem('token')}`)
  // }
  return this.http.post(`${this.baseUrl}user/updateProfileimg` , obj)
}
// ****************





  login(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/login` , data)
  }



  // profile(data: any):Observable<any>{
  //   return this.http.post(`${this.baseUrl}profile` , data)
  // }

  getProfile(): Observable<any>{
    return this.http.get(`${this.baseUrl}user/profile `)
  }

  // uploadUserImage(obj:any):Observable<any>{
  //   return this.http.post(`${this.baseUrl}user/profile` , obj)
  // }


}
