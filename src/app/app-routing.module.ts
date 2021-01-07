import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { ProjectsComponent } from '../app/pages/projects/projects.component';
import { ResumeComponent } from '../app/pages/resume/resume.component';
import { VolunteerComponent } from '../app/pages/volunteer/volunteer.component';
import { AboutComponent } from './pages/about/about.component';
import { MATA37TutorialComponent } from './pages/mata37-tutorial/mata37-tutorial.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'mata37-w21', component: MATA37TutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
