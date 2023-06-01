import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {


  experienceErrorMsg:string=""
  experienceSuccessMsg:string=''
  // experienceSuccessStatus:boolean=false
// form group
experienceForm = this.experienceFb.group({

  // form array
  jobtitle:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    employer:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    city:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    country:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    startdate:['',[Validators.required]],
    enddate:['',[Validators.required]]
  
  })
  constructor(private experienceFb:FormBuilder,private api:ApiService,private experienceRouter:Router ){

  }
  experience(){
    if(this.experienceForm.valid){
      // get acnon password
           let jobtitle = this.experienceForm.value.jobtitle
            let employer =this.experienceForm.value.employer
            let city =this.experienceForm.value.city
            let country =this.experienceForm.value.country
            let startdate =this.experienceForm.value.startdate
            let enddate =this.experienceForm.value.enddate
          
    // make api call for login
  this.api.experience (jobtitle,employer,city,country,startdate,enddate).subscribe(
    // response 200
    (result:any)=>{
      alert(result.message)
      // this.experienceSuccessStatus=true
      // this.experienceSuccessMsg=result.message

       setTimeout(()=>
     {
       // redirect to home
       this.experienceRouter.navigateByUrl("/education")
    },2000)
    },
  
    // response 400
    (result:any)=>{
      this.experienceErrorMsg = result.error.message
      setTimeout(()=>{
        this.experienceForm.reset()
        this.experienceErrorMsg=""
      },2000)
  
    }
  )
    
  }
  else{
    alert('Invalid Form')
  }
  }



}
