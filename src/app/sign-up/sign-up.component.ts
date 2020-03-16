import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: any;
  signUp = this.fb.group({
    firstName:['',[Validators.required, Validators.minLength(3)]],
    lastName:['',[Validators.required, Validators.minLength(2)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });

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
        this.router.navigateByUrl('/login');
      }
      else{
        alert(res.message);
      }
    });
  }


  ngOnInit() {}

}
