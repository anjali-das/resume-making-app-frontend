import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { JobstepsComponent } from './jobsteps/jobsteps.component';
import { TemplatesComponent } from './templates/templates.component';
import { HavecvComponent } from './havecv/havecv.component';
import { HeaderDetailComponent } from './header-detail/header-detail.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { Temp1Component } from './temp1/temp1.component';
import { LoginComponent } from './login/login.component';
import { Temp2Component } from './temp2/temp2.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'',component:LoginComponent
  },
  
  {
    path: "register", component: RegisterComponent
  },
  
  {
    path: "jobsteps", component: JobstepsComponent
  },
  
  {
    path:"havecv",component:HavecvComponent
  },
  
  {
    path:"templates" , component:TemplatesComponent
  },
  
  {
    path:"header-detail" , component:HeaderDetailComponent
  },

  {
    path:"experience" , component:ExperienceComponent
  },
  {
    path:"education" ,component:EducationComponent
  },
  {
    path:"skills",component:SkillsComponent
  },
  
  {
    path:"temp1",component:Temp1Component
  },
  {
    path:"temp2",component:Temp2Component
  },
  {
    path:"contactus",component:ContactusComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
