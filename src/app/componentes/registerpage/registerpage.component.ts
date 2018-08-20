import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public servicioAuth:AuthService,public ruter:Router) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.servicioAuth.registerUser(this.email,this.password)
    .then((res)=>{this.ruter.navigate(['/privado']);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
