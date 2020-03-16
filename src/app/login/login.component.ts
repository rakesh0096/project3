import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = this.fb.group({
    
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
users: any;

  constructor(public router:Router,private fb:FormBuilder,private service:MainService) { }

  logIn(){
    this.service.userslogin({
      email:this.login.value.email,
      password:this.login.value.password
    })
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


  ngOnInit(){
  }

}
