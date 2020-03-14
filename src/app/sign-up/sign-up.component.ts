import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  signUp = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
users: any;
  constructor(
    private fb:FormBuilder,
    private service:MainService,
    public router:Router
    ){ }

  signup(){
    
    this.service.postUsers({
      firstName:this.signUp.value.firstName,
      lastName:this.signUp.value.lastName,
      email:this.signUp.value.email,
      password:this.signUp.value.password
    })
    .subscribe((res) => {
      this.users = res.data;
      console.log(this.users);
      if(res.success === true){
        this.router.navigate([`${'/login'}`]);
      }
      else{
        alert(res.message);
      }
    });
  }


  ngOnInit() {}

}
