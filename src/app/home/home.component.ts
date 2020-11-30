import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data:any;
   displayedColumns: string[] = ['ACCOUNT NO', 'DATE', 'TRASACTION DETAILS', 'Withdrawl Atm','Deposit Atm','Balance Atm'];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.bankserve();
    }
  
bankserve(){
return this.homeService.getBankdata().subscribe(
  res=>{
    this.data=res;
console.log(this.data);
  },
  error=>{
   console.log(error)
  }
  
  );
}

}
