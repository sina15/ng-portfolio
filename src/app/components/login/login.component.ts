import { Component, Input, OnInit } from '@angular/core';
import {PwdEncryptService} from '../../services/pwd-encrypt.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() name:string = ""
  @Input() pwd:string = ""

  constructor(private encryptor:PwdEncryptService) { }

  ngOnInit(): void {
  }


  log(x){
    console.log(x)
  }

  login(form){
   console.log("name",this.name);
  let encPwd = this.encryptor.set(this.pwd)
  console.log("pwd",encPwd)
  }

}
