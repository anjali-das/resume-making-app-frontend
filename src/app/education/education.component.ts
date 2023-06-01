import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {


  educationErrorMsg:string=""
// form group
educationForm = this.educationFb.group({

  // form array
  schoolname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    schoollocation:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    qualification:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    fieldofstudy:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    yearofgraduation:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  
  })
  constructor(private educationFb:FormBuilder,private api:ApiService,private educationRouter:Router ){

  }
  education(){
    if(this.educationForm.valid){
      // get acnon password
           let schoolname = this.educationForm.value.schoolname
            let schoollocation =this.educationForm.value.schoollocation
            let qualification =this.educationForm.value.qualification
            let fieldofstudy =this.educationForm.value.fieldofstudy
            let yearofgraduation =this.educationForm.value.yearofgraduation
          
    // make api call for login
  this.api.education(schoolname,schoollocation,qualification,fieldofstudy,yearofgraduation).subscribe(
    // response 200
    (result:any)=>{
      alert(result.message)
      console.log(result);
      
     

       setTimeout(()=>
     {
       // redirect to home
       this.educationRouter.navigateByUrl("/skills")
    },2000)
    },
  
    // response 400
    (result:any)=>{
      this.educationErrorMsg = result.error.message
      setTimeout(()=>{
        this.educationForm.reset()
        this.educationErrorMsg=""
      },3000)
  
    }
  )
    
  }
  else{
    alert('Invalid Form')
  }
  }







}
