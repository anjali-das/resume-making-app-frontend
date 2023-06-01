import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  logoutStatus:boolean=false
 
 skillErrorMsg:string=""

// form group
skillForm = this.skillFb.group({

// form array
 skill:['',[Validators.required]],
 summery:['',[Validators.required]],
 hobbies:['',[Validators.required]]

})
constructor(private skillFb:FormBuilder,private api:ApiService,private skillRouter:Router ){

}
skill(){
  if(this.skillForm.valid){
    // get acnon password
         let skill = this.skillForm.value.skill
         let summery =this.skillForm.value.summery
         let hobbies = this.skillForm.value.hobbies
         
        
  // make api call for login
this.api.skill (skill,summery,hobbies).subscribe(
  // response 200
  (result:any)=>{
    alert(result.message)

     setTimeout(()=>
   {
     // redirect to home
     this.skillRouter.navigateByUrl("/temp1")
  },2000)
  },

  // response 400
  (result:any)=>{
    this.skillErrorMsg = result.error.message
    setTimeout(()=>{
      this.skillForm.reset()
      this.skillErrorMsg=""
    },2000)

  }
)
  
}
else{
  alert('Invalid Form')
}
}



}

