import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { ProjectsComponent } from '../app/pages/projects/projects.component';
import { ResumeComponent } from '../app/pages/resume/resume.component';
import { AboutComponent } from './pages/about/about.component';
import { MATA37TutorialComponent } from './pages/mata37-tutorial/mata37-tutorial.component';
import { TeachingComponent } from './pages/teaching/teaching.component';
import { MATA32TutorialComponent } from '../app/pages/mata32-tutorial/mata32-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'now', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'mata37', component: MATA37TutorialComponent },
  { path: 'mata32-f21', component: MATA32TutorialComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
