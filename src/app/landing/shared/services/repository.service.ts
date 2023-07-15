import { Injectable } from "@angular/core";
import { CoursesByTechnology, CoursesRepository } from "../interfaces/course";
import { mockCourses } from "./mockCourses";
import { Observable, delay, of, tap } from "rxjs";
import { mockStutendsFeedback } from "./mockStudentsFeedback";
import { StudentFeedback, StudentFeedbacksRepository } from "../interfaces/student-feedback";
import { Mentor, MentorsRepository } from "../interfaces/mentor";
import { mockMentors } from "./mockMentors";

@Injectable({providedIn: 'root'})
export class RepositoryService implements CoursesRepository, StudentFeedbacksRepository, MentorsRepository{
    private coursesCache: CoursesByTechnology | null = null
    private studentsFeedbackCache: StudentFeedback[] | null = null
    private mentorsCache: Mentor[] | null = null

    getCourses(): Observable<CoursesByTechnology>{
        if(this.coursesCache){
            return of(this.coursesCache)
        }else{
            return this._getCourses()
        }
    }

    private _getCourses(): Observable<CoursesByTechnology>{
        return of(mockCourses).pipe(
            delay(50),
            tap(courses => this.coursesCache = courses)
        )
    }

    getStudentFeedbacks(): Observable<StudentFeedback[]> {
        if(this.studentsFeedbackCache){
            return of(this.studentsFeedbackCache)
        }else{
            return this._getStudentFeedbacks()
        }
    }

    private _getStudentFeedbacks(): Observable<StudentFeedback[]> {
        return of(mockStutendsFeedback).pipe(
            delay(50),
            tap(studentsFeedback => this.studentsFeedbackCache = studentsFeedback)
        )
    }

    getMentors(): Observable<Mentor[]> {
        if(this.mentorsCache){
            return of(this.mentorsCache)
        }else{
            return this._getMentors()
        }
    }

    _getMentors(): Observable<Mentor[]> {
        return of(mockMentors).pipe(
            delay(50),
            tap(mentors => this.mentorsCache = mentors)
        )
    }
}