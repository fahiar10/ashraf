import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Data} from './data';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  personkeyUSN = new Map();
    
  Editperson:any;
  getedit(){
    return this.Editperson; 
  }

  getData():Observable<Data[]>{
    return  this.http.get<any>('http://localhost:3000/api/getAll');
  }





  headers:any;
  addData(newData:any){
    // console.log(newData);

    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    return this.http.post<Data[]>('http://localhost:3000/api/post',newData,{headers:this.headers});
  }


  
  //delete
  DeleteData(id:string):Observable<Data[]> {
    

    return this.http.delete<Data[]>('http://localhost:3000/api/delete/'+id);
  }


  //update data
  update(id: any, data: any): Observable<Data[]> {
    return this.http.patch<Data[]>(`http://localhost:3000/api/update/${id}`, data);
  }
}
