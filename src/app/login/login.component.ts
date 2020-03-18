import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {
  users: any;
  login: FormGroup;
  constructor(
    public router:Router,
    private fb:FormBuilder,
    private service:MainService
    ){ }
  
  ngOnInit(){
    this.login = this.fb.group({
      email:['',
      [Validators.required,
      Validators.email
      ]],
      password:['',
      [Validators.required,
      Validators.minLength(5)
      ]]
    });
  }

  //get items

  get email(){
    return this.login.get('email');
  }
  get password(){
    return this.login.get('password');
  }
  

  logIn(){
    var userData = {
      email:this.login.value.email,
      password:this.login.value.password
    }
    this.service.userslogin(userData)
    .subscribe((res) => {
      this.users = res.data;
      if(res.success){
        this.router.navigate([`${'/dashboard'}`]);
      }
      else{
        alert(res.message);
      }
    });
  }

}
