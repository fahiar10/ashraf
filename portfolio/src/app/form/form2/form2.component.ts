import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {FormComponent} from '../form.component';
import {MessageService} from 'primeng/api';


// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
  providers: [MessageService]
})
export class Form2Component implements OnInit {

  constructor(private DataService:DataService,
    private messageService:MessageService
    ) { }
  
  
  public person:any = this.DataService.getedit();
  ngOnInit(): void {
  }
  object:any;
  SubmitEdited(login:any,id:any){
    this.object = login.form.value;


    this.DataService.update(id,this.object).subscribe({
      next: (data:any) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Updated to the data base'});
        // console.log("Done ...:)")
        // console.log(data);
      },
      error: (e) => console.error(e)
  });

}
}
