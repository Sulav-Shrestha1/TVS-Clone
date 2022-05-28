import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Login: boolean = false;
  Register: boolean = false;
  clickEvent(){
      this.Login = !this.Login;       
  }
  clickEvent2(){
      this.Register = !this.Register;       
  }

}
