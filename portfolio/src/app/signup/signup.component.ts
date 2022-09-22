import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  username1:any;
  password1:any;

  flag:boolean=false
  gotosignin(username:any,password:any){
    this.username1 = username.value;
    this.password1 = password.value;
    this.flag = true;
    console.log(this.username1 +" " + this.password1);
  }
  


  ngOnInit(): void {
  }

}
