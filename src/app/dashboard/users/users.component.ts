import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private service: MainService) { }

  getUsers(){
    this.service.getUsers()
    .subscribe(res => {
        this.users = res.data;
        console.log(this.users);
    })
  }

  ngOnInit() {
    this.getUsers();
  }

}
