import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { TutorialBoxComponent } from './components/tutorial-box/tutorial-box.component';
import { ProjectBoxComponent } from './components/project-box/project-box.component';
import { ExperienceBoxComponent } from './components/experience-box/experience-box.component';
import { InfiniteTypeDeleteModule } from 'ngx-sbz-type-delete';
import { MatTabsModule } from '@angular/material/tabs';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NowComponent } from './pages/now/now.component';
import { ResumeExperienceComponent } from './components/resume-experience/resume-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    ResumeComponent,
    VolunteerComponent,
    FooterComponent,
    TutorialBoxComponent,
    ProjectBoxComponent,
    ExperienceBoxComponent,
    FeaturedWorkComponent,
    NowComponent,
    ResumeExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    InfiniteTypeDeleteModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
