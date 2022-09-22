import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  @Input() username:any; 
  @Input() password:any;
  ngOnInit(): void {
  }
  validate(username:any,password:any){
      if(this.username == username.value && this.password == password.value)
        alert("Login successfull");
  }

}
