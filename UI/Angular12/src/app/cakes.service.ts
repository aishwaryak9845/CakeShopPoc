import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CakesService {
  
readonly APIUrl="http://localhost:55555/api";

constructor(private http:HttpClient) { }



getCakeTypeList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/CakeType');
}

addCakeType(val:any){
  return this.http.post(this.APIUrl+'/CakeType',val);
}

updateCakeType(val:any){
  return this.http.put(this.APIUrl +'CakeType',val);
}

deleteCakeType(val:any){
  return this.http.delete(this.APIUrl+'/CakeType/'+val);
}

getCakeList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Cake');
}

addCake(val:any){
  return this.http.post(this.APIUrl+'/Cake',val);
}

updateCake(val:any){
  return this.http.put(this.APIUrl +'Cake',val);
}
deleteCake(val:any){
  return this.http.delete(this.APIUrl+'/Cake/'+val);
}

getAllCakeTypeNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Cake/GetAllCakeTypeNames');
}


}
