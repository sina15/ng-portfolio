import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { sign } from 'crypto';
import { PwdEncryptService } from 'src/app/services/pwd-encrypt.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private encryptor:PwdEncryptService) { }

  ngOnInit(): void {
  }

  matchPwd:boolean=false

  signUpForm = new FormGroup({
    name:new FormControl("",[Validators.required]),
    phone:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required]),
    password:new FormGroup({
      pwd1:new FormControl("",[Validators.required,Validators.minLength(6)]),
      pwd2:new FormControl("",[Validators.required,Validators.minLength(6)])
    })
  })

//formbuilder provide a quick way to create new form control, buillder or array
  // password = this.fb.group({
  //   pwd1: ["",[Validators.required,Validators.minLength(6)]],
  //   pwd2:["",[Validators.required,Validators.minLength(6)]]
  // })

  //u can also use this.fb.control({


  signUp(){
    console.log(this.signUpForm)
    this.matchPwd?console.log("Form Okay"):console.log("password don't match")
  }

  validatePassword(){
    this.matchPwd = this.signUpForm.get('password').get('pwd1').value == this.signUpForm.get('password').get('pwd2').value
  }

}
