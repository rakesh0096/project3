import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users: any;
  signUp: FormGroup;
  constructor(
    private fb:FormBuilder,
    private service:MainService,
    public router:Router
    ){ }

    ngOnInit() {
      this.signUp = this.fb.group({
        firstName:['',
        [Validators.required,
        Validators.minLength(3)
        ]],
        lastName:['',[
        Validators.required,
        Validators.minLength(3)
        ]],
        email:['',[
        Validators.required,
        Validators.email
        ]],
        password:['',[
        Validators.required,
        Validators.minLength(5)
        ]]
      });
    }
  
// Get items

  get firstName(){
    return this.signUp.get('firstName');
  }
  get lastName(){
    return this.signUp.get('lastName');
  }
  get email(){
    return this.signUp.get('email');
  }
  get password(){
    return this.signUp.get('password');
  }
 

  signup(){
    var userData = {
      firstName:this.signUp.value.firstName,
      lastName:this.signUp.value.lastName,
      email:this.signUp.value.email,
      password:this.signUp.value.password
    }
    this.service.postUsers(userData)
    .subscribe(res=>{
      if(res.success === true){
        this.router.navigateByUrl('/login');
      }
      else{
        alert(res.message);
      }
    })
  }
 
}
