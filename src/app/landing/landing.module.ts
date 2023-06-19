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
import { IntroAccordionComponent } from './introductory/intro-accordion/intro-accordion.component';
import { TabsComponent } from './courses/tabs/tabs.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { BgImageDirective } from './courses/course-card/bg-image.directive';
import { MentorCardComponent } from './mentors/mentor-card/mentor-card.component';
import { DragScrollLeftDirective } from './shared/directories/drag-scroll-left.directive';
import { StudentFeedbackCardComponent } from './students-feedback/student-feedback-card/student-feedback-card.component';


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
    FooterComponent,
    IntroAccordionComponent,
    TabsComponent,
    CourseCardComponent,
    BgImageDirective,
    MentorCardComponent,
    DragScrollLeftDirective,
    StudentFeedbackCardComponent
  ]
})
export class LandingModule { }
