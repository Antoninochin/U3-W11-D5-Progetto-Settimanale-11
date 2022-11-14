import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  myuser: User = new User()
  @ViewChild('f') form!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  addUser() {
    this.myuser.name = this.form.value.name;
    this.myuser.lastName = this.form.value.lastName;
    this.myuser.email = this.form.value.email;
    this.myuser.password = this.form.value.password;
    console.log(this.myuser)
    this.form.reset()
  }

}
