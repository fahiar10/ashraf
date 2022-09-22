import { Component, NgModule,Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DataService } from '../data.service';
import { Data } from '../data';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';
import { Inject} from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DataService,Data]
})
export class FormComponent implements OnInit {
  public name:string = "";
  public usn:string = "";
  public age:any;
  public val:any;

  constructor(private DataService:DataService) {}
  value:any;

    //traverse and display

    display(){
      this.DataService.getData().subscribe({
        next: (data) => {
          this.data = data;
          console.table( this.data);
        },
        error: (e) => console.error(e)
      });
    }
  


  public load=false;
  @Input() data:any;
   ngOnInit() {
    // setTimeout(() => {
      this.load = true;
    // }, 5000);
    
    this.display();
  }


  public ed:boolean = false;
  Edit(person:any){
    console.log(person);
    this.DataService.Editperson = person;
  }

  //Delete the data
 Delete(person:any){
    console.log("Delete");
    this.DataService.DeleteData(person)
    .subscribe({
          next: (data:any) => {
            // this.currentTutorial = data;
            this.display();
            console.log(data);
          },
          error: (e) => console.error(e)
        });
  }


//add the data 
  public object:any;
  submit(e:any){
    this.object = e.form.value;
   
      console.log(e);
      this.DataService.addData(this.object).subscribe((arg) => {this.display()});
   
  }
 





}
