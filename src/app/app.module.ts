import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactService } from './contact.service';
import { DashboardGuard } from './dashboard.guard';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { ContactMessagesComponent } from './contact-messages/contact-messages.component';
import { DbSkillsComponent } from './db-skills/db-skills.component';
import { DbProjectsComponent } from './db-projects/db-projects.component';
// import { DbServicesComponent } from './db-services/db-services.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddProjectComponent } from './add-project/add-project.component';
// import { EditServiceComponent } from './edit-service/edit-service.component';
// import { AddServicComponent } from './add-servic/add-servic.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProjectsService } from './projects/projects.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    DashboardComponent,
    ServicesComponent,
    ResumeComponent,
    EditSkillComponent,
    ContactMessagesComponent,
    DbSkillsComponent,
    DbProjectsComponent,
    // DbServicesComponent,
    EditProjectsComponent,
    AddSkillComponent,
    AddProjectComponent,
    // EditServiceComponent,
    // AddServicComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [ContactService, DashboardGuard, ProjectsService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
