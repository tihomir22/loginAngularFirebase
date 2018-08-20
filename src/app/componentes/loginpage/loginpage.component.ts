import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public email:string;
  public pass:string;

  constructor(public auth:AuthService,public ruter:Router) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    this.auth.loginEmail(this.email,this.pass)
    .then((res)=>{
      this.ruter.navigate(['/privado']);
    }).catch((err)=>{console.log('Error de login');
    this.ruter.navigate(['/login']);
  })
  }

}
