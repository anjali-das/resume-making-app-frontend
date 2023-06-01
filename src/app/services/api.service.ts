import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  // register
  register(username:any,email:any,password:any,confirmpassword:any){
    const body ={
      username,
      email,
      password,
      confirmpassword
    }

    //make api call to server for register
return this.http.post('http://localhost:3000/register',body)
  }

  // login
login(username:any,password:any){
  const body = {
    username,
    password
  }
  //  make api call to server for login
  return this.http.post('http://localhost:3000/login',body)
  }

  // append token to the request header
appendToken(){
  // get token from localstorage
  let token = localStorage.getItem('token')
  // create http header
  let headers =new HttpHeaders()
  if(token){
    headers=headers.append('verify-token',token)
    options.headers = headers
  }
  return options
}

  // header-detail

headerdetail(firstname:any,lastname:any,city:any,country:any,pincode:any,phonenumber:any,email:any){
  const body = {
    firstname,
    lastname,
    city,
    country,
    pincode,
    phonenumber,
    email
  }
  //  make api call to server for headerdetail
  return this.http.post('http://localhost:3000/headerdetail',body)
  }

  allheaderdetail(){
    return this.http.get('http://localhost:3000/headerdetail')

  }


   // experience

   experience(jobtitle:any,employer:any,city:any,country:any,startdate:any,enddate:any){
  const body = {
    jobtitle,
    employer,
    city,
    country,
    startdate,
    enddate,
  }
  //  make api call to server for experience
  return this.http.post('http://localhost:3000/experience',body)
  }

  allexperiencedetails(){
    return this.http.get('http://localhost:3000/experience')

  }



 // education

 education(schoolname:any,schoollocation:any,qualification:any,fieldofstudy:any,yearofgraduation:any){
  const body = {
    schoolname,
    schoollocation,
    qualification,
    fieldofstudy,
    yearofgraduation
  }
  //  make api call to server for education
  return this.http.post('http://localhost:3000/education',body)
  }

  // alleducationdetails(){
  //   return this.http.get('http://localhost:3000/education')

  // }

  alleducationdetails(){
    return this.http.get('http://localhost:3000/education')
  }


   // skill

 skill(skill:any,summery:any,hobbies:any){
  const body = {
   skill,
   summery,
   hobbies
  }
  //  make api call to server for skills
  return this.http.post('http://localhost:3000/skill',body)
  }

 allskilldetails(){
    return this.http.get('http://localhost:3000/skill',this.appendToken())

  }

  // ===================delet=================
  //deleteMyAcoount
  deleteUserAcnt(){
    return this.http.delete('http://localhost:3000/delete-my-account',this.appendToken())
  }

// delete-UserExperice
deleteExperince(){
  return this.http.delete('http://localhost:3000/delete-UserExperince')
}

// delete-UserEducation
deleteEducation(){
  return this.http.delete('http://localhost:3000/delete-UserEducation')

}

// delete-UserSkill
deleteSkill(){
  return this.http.delete('http://localhost:3000/delete-UserEducation')

}

}


