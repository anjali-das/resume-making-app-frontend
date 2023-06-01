import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.css']
})
export class HeaderDetailComponent {
  
  headerdetailErrorMsg:string=""
  headrdetailSuccessMsg:string=''
  headerdetailSuccessStatus:boolean=false
// form group
headerdetailForm = this.headerdetailFb.group({

  // form array
  firstname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  lastname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  city:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  country:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  pincode:['',[Validators.required, Validators.pattern('[0-9 ]*')]],
  phonenumber:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  email:['',[Validators.required]]
  
  })
  constructor(private headerdetailFb:FormBuilder,private api:ApiService,private headerdetailRouter:Router ){

  }
  headerdetail(){
    if(this.headerdetailForm.valid){
      // get acnon password
      let firstname = this.headerdetailForm.value.firstname
          let lastname =this.headerdetailForm.value.lastname
          let city =this.headerdetailForm.value.city
          let country =this.headerdetailForm.value.country
          let pincode =this.headerdetailForm.value.pincode
          let phonenumber =this.headerdetailForm.value.phonenumber
          let email =this.headerdetailForm.value.email
    // make api call for login
  this.api.headerdetail (firstname,lastname,city,country,pincode,phonenumber,email).subscribe(
    // response 200
    (result:any)=>{
      alert(result.message)
      this.headerdetailSuccessStatus=true
      this.headrdetailSuccessMsg=result.message

       setTimeout(()=>
     {
       // redirect to home
       this.headerdetailRouter.navigateByUrl("/experience")
    },2000)
    },
  
    // response 400
    (result:any)=>{
      this.headerdetailErrorMsg = result.error.message
      setTimeout(()=>{
        this.headerdetailForm.reset()
        this.headerdetailErrorMsg=""
      },2000)
  
    }
  )
    
  }
  else{
    alert('Invalid Form')
  }
  }


}


