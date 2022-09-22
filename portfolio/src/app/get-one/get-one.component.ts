import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent implements OnInit {

  constructor() { }
  usn:string="";
  isLoading:boolean=false
  ngOnInit(): void {
  }
  Submit(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
    }, 3000);
  }
}
