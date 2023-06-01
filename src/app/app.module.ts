import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Temp2Component } from './temp2/temp2.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { Temp3Component } from './temp3/temp3.component';
import { ContactusComponent } from './contactus/contactus.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    RegisterComponent,
    JobstepsComponent,
    TemplatesComponent,
    HavecvComponent,
    HeaderDetailComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    Temp1Component,
    LoginComponent,
    Temp2Component,
    DeleteConfirmComponent,
    Temp3Component,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
