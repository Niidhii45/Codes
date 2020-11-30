import { Component, OnInit } from '@angular/core';
import { ServeService } from './serve.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['ACCOUNT NO', 'DATE', 'TRASACTION DETAILS', 'Withdrawl Atm','Deposit Atm','Balance Atm','Details'];
mainData:any;
  constructor(private search:ServeService) { }

  ngOnInit(): void {
    this.scrb();
  }
scrb(){
  return this.search.data().subscribe(
    dataserve=>
    {
      this.mainData=dataserve;
      console.log(dataserve);
    },
    error=>{console.log(error);
    });
}
onClick(){
  alert("EMPTY");
}
}
