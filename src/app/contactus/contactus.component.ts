import { Component, OnInit } from '@angular/core';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  displayedColumns: string[] = ['ACCOUNT NO', 'DATE', 'TRASACTION DETAILS', 'Withdrawl Atm','Deposit Atm','Balance Atm','Details'];
mainData:any;
  constructor( private contactUs:ContactUsService) { }

  ngOnInit(): void {
    this.subs();
  }
  subs(){
    return this.contactUs.print().subscribe(
      data=>{
        this.mainData=data;
        console.log(data);
      },
        error=>{console.log(error);
        });
        
  }
  onClick(){
    alert("Empty");
  }
}
