import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userLogin=new FormGroup({
        name:new FormControl("",[Validators.required]),
        email:new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required]),
        confirmPassword: new FormControl("",[Validators.required]),
        gender:new FormControl("")

    });
  }
OnSubmit(){
  console.log(this.userLogin.value);
}

}
