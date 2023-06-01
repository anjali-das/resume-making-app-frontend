import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginsuccess:boolean=false
// form group
loginForm = this.loginFb.group({

  // form array
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
  })
  constructor(private loginFb:FormBuilder ){

  }
  login(){
    let username = this.loginForm.value.username
    console.log(username);
    let password = this.loginForm.value.password
    console.log(password);
    this.loginsuccess=true

    
    
  }
}
