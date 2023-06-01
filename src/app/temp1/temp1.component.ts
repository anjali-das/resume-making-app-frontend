import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css']
})
export class Temp1Component {
  headerdetails:any
  skilldetails: any
  experiencedetails:any
  educationdetails:any
  template:any=[]
  logoutStatus:boolean=false
  deleteConfirmStatus:boolean=false
  deleteSuccessMsg:string=""
  userdelete:any
  



  constructor(private api:ApiService,private temp1Router:Router){}


  ngOnInit() {

    // headerdetail
    this.api.allheaderdetail()
    .subscribe((result:any)=>{
  console.log(result);
  this.headerdetails=result
    })
   

    // skill
    this.api.allskilldetails()
    .subscribe((result:any)=>{
  console.log(result);
  this.skilldetails=result
    })


    // experience
    this.api.allexperiencedetails()
    .subscribe((result:any)=>{
  console.log(result);
  this.experiencedetails=result
    })


     // education
     this.api.alleducationdetails()
     .subscribe((result:any)=>{
   console.log(result);   
   this.educationdetails=result
     })
 }
 
 
  logout(){
    //remove all data stored  in local storage  for this perticular user
  localStorage.removeItem('currentUsername')
  
  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to home
    this.temp1Router.navigateByUrl('')
  },2000);
  }

  printpage(){
    window.print()
  }

  //deleteAccount()
  deleteAccount(){
    //data to be shared with child
    this.userdelete =localStorage.getItem("currentUsername")
    this.deleteConfirmStatus = true
  }

  //cancelDeleteConfirm()
  cancelDeleteConfirm(){
    this.userdelete=""
    this.deleteConfirmStatus = false
  }

  deleteFromParent(){
    this.api.deleteUserAcnt()
    // this.api.deleteExperince()
    // this.api.deleteEducation()
    // this.api.deleteSkill()
    .subscribe((result:any)=>{
      localStorage.removeItem('currentUsername')
       
      this.deleteSuccessMsg=result.message
      this.deleteConfirmStatus = true
      setTimeout(()=>{
        this.temp1Router.navigateByUrl('home')
      },2000);
    })
  }

  // deleteExperince()

  
}


