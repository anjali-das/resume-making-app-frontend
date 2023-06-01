import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginErrorMsg:string=""
  loginSuccessStatus:boolean=false
// form group
loginForm = this.loginFb.group({

  // form array
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
  })
  constructor(private loginFb:FormBuilder,private api:ApiService,private loginRouter:Router ){

  }
  login(){
    if(this.loginForm.valid){
      // get acnon password
    let username = this.loginForm.value.username
    let password = this.loginForm.value.password
    // make api call for login
  this.api.login (username,password).subscribe(
    // response 200
    (result:any)=>{
      alert(result.message)
      this.loginSuccessStatus=true
      // store currentUser in local storage
      localStorage.setItem('currentUsername',result.currentUsername)
      // store token in  local storage
      localStorage.setItem('token',result.token)
      // store currentAcno in  local storage
      // localStorage.setItem('currentAcno',result.currentAcno)
     setTimeout(()=>
     {
       // redirect to home
       this.loginRouter.navigateByUrl("/home")
    },1000)
    },
  
    // response 400
    (result:any)=>{
      this.loginErrorMsg = result.error.message
      setTimeout(()=>{
        this.loginForm.reset()
        this.loginErrorMsg=""
      },1000)
  
    }
  )
    
  }
  else{
    alert('Invalid Form')
  }
  }
}
