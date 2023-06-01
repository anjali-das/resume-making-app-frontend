import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

registerErrorMsg:string=''
registerSuccessMsg:string=''
  // form group
registerForm = this.registerFb.group({
  // form array
  username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  password:['',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9 ]*')]],
  confirmpassword:['',[Validators.required, Validators.minLength(6),Validators.pattern('[a-zA-Z0-9 ]*')]]
})

 constructor(private registerFb:FormBuilder,private api:ApiService,private registerRouter:Router){

 }
 
 
 
 register(){
  
  if(this.registerForm.valid){
  let username = this.registerForm.value.username
  let email =this.registerForm.value.email
  let password = this.registerForm.value.password
  let confirmpassword = this.registerForm.value.confirmpassword





  if(this.registerForm.valid){
// cheking confirm password match
if(password==confirmpassword){
  // api call for register
this.api.register(username,email,password,confirmpassword)
.subscribe(

 // response 200
 (result:any)=>{
  alert(result.message)
  this.registerSuccessMsg=result.message
  setTimeout(()=>{
// redirect to login page
this.registerRouter.navigateByUrl('')
  },2000)
  
},
// response 400
(result:any)=>{
this.registerErrorMsg=result.error.message
setTimeout(()=>{
this.registerForm.reset()
this.registerErrorMsg=""
},2000);
}
)
}
else{
  alert('Invalid Form')
}
}

  }
else{
  alert('Invalid Form')
}

}

  

}
