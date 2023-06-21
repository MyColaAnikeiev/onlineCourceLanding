import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Course } from '../shared/interfaces/course';
import { CoursesService } from '../shared/services/courses.service';
import { map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [
    '../common.css',
    './courses.component.css'
  ]
})
export class CoursesComponent implements OnInit{
  tabs: string[] = []
  currentTab: string = ''
  courses: Course[] = []

  constructor(private coursesService: CoursesService, private cd: ChangeDetectorRef){}

  ngOnInit(): void {
    this.coursesService.getListOfTechnologies()
      .pipe(
        map(tabs => {
          this.tabs = tabs

          if(tabs.length){
            this.currentTab = tabs[0]
            return tabs[0]
          }

          return ''
        }),
        switchMap(tab => {
          if(tab){
            return this.coursesService.getCourses(tab)
          }else{
            return of([])
          }
        }),
        tap(courses => {
          this.courses = courses
        })
      )
      .subscribe()
  }

  switchTab(tab: string): void{
    this.currentTab = tab
    this.coursesService.getCourses(tab)
      .subscribe(courses => {
        this.courses = courses
      })
  }
}
