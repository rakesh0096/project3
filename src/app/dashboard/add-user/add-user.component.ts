import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
id:any;
  users: any;
  addUser: FormGroup;
  constructor(
    private fb:FormBuilder ,
    private service:MainService,
    public router:Router
    ) { }

    ngOnInit() {
      this.addUser = this.fb.group({
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
    return this.addUser.get('firstName');
  }
  get lastName(){
    return this.addUser.get('lastName');
  }
  get email(){
    return this.addUser.get('email');
  }
  get password(){
    return this.addUser.get('password');
  }
 
 

  adduser(){
    var userData = {
      firstName:this.addUser.value.firstName,
      lastName:this.addUser.value.lastName,
      email:this.addUser.value.email,
      password:this.addUser.value.password
    }
    this.service.postUsers(userData)
    .subscribe(res=>{
      if(res.success === true){
        this.router.navigateByUrl('/dashboard/users');
      }
      else{
        alert(res.message);
      }
    })
  }

}
