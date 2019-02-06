import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public loginForm:  FormGroup;

  show = false;
  __showEasy = true;
  __showElec = false;
  constructor() { }
  showEasy() {
    this.__showEasy = true;
    this.__showElec = false;
    return this.__showEasy;
  }
  showElec(){
    this.__showEasy = false;
    this.__showElec = true;
    return this.__showElec;
  }
  ngOnInit() {
  }

}
