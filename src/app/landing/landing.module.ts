import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { IntroductoryComponent } from './introductory/introductory.component';
import { CompaniesComponent } from './companies/companies.component';
import { CoursesComponent } from './courses/courses.component';
import { MentorsComponent } from './mentors/mentors.component';
import { StudentsFeedbackComponent } from './students-feedback/students-feedback.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent,
    HeaderComponent,
    IntroductoryComponent,
    CompaniesComponent,
    CoursesComponent,
    MentorsComponent,
    StudentsFeedbackComponent,
    NewsletterComponent,
    FooterComponent
  ]
})
export class LandingModule { }
