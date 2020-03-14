import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
  users: any;
  constructor(
    private fb:FormBuilder ,
    private service:MainService,
    public router:Router
    ) { }

  adduser(){

    this.service.postUsers({
      firstName:this.addUser.value.firstName,
      lastName:this.addUser.value.lastName,
      email:this.addUser.value.email,
      password:this.addUser.value.password
    })
    .subscribe((res) => {
      this.users = res.data;
      console.log(this.users);
      if(res.success === true){
        alert('User Successfully Added')
        this.router.navigateByUrl("/dashboard/users")
      }
      else{
        alert(res.message);
      }
    });
  }


  ngOnInit() {}

}
