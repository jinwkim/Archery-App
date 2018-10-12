import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = {
  	FirstName: 'Jin',
  	LastName: 'Kim',
  	Age: 5
  };

  constructor() { }

  ngOnInit() {
  }

}
