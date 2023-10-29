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
import { SidebarBoxComponent } from './components/sidebar-box/sidebar-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TutorialBoxComponent } from './components/tutorial-box/tutorial-box.component';
import { ProjectBoxComponent } from './components/project-box/project-box.component';
import { TeachingComponent } from './pages/teaching/teaching.component';
import { TeachingListComponent } from './components/teaching-list/teaching-list.component';
import { ExperienceBoxComponent } from './components/experience-box/experience-box.component';
import { EducationBoxComponent } from './components/education-box/education-box.component';
import { InfiniteTypeDeleteModule } from 'ngx-sbz-type-delete';
import { NgxVerticalTimelineComponent } from './components/ngx-vertical-timeline/ngx-vertical-timeline.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NowComponent } from './pages/now/now.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    ResumeComponent,
    VolunteerComponent,
    SidebarBoxComponent,
    FooterComponent,
    AboutComponent,
    TutorialBoxComponent,
    ProjectBoxComponent,
    TeachingComponent,
    TeachingListComponent,
    ExperienceBoxComponent,
    EducationBoxComponent,
    NgxVerticalTimelineComponent,
    FeaturedProjectsComponent,
    FeaturedWorkComponent,
    NowComponent,
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
    PdfViewerModule,
    InfiniteTypeDeleteModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
