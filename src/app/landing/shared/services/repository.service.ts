import { Injectable, OnDestroy } from "@angular/core";
import { CoursesByTechnology, CoursesRepository } from "../interfaces/course";
import { mockCourses } from "./mockCourses";
import { Observable, Subject, delay, of, retry, shareReplay, takeUntil } from "rxjs";
import { mockStutendsFeedback } from "./mockStudentsFeedback";
import { StudentFeedback, StudentFeedbacksRepository } from "../interfaces/student-feedback";
import { Mentor, MentorsRepository } from "../interfaces/mentor";
import { mockMentors } from "./mockMentors";

@Injectable({providedIn: 'root'})
export class RepositoryService implements 
    CoursesRepository, 
    StudentFeedbacksRepository, 
    MentorsRepository,
    OnDestroy
{
    private coursesCache: Observable<CoursesByTechnology> | null = null
    private studentsFeedbackCache: Observable<StudentFeedback[]> | null = null
    private mentorsCache: Observable<Mentor[]> | null = null

    private unsubscribe$ = new Subject()

    private prepareAPIRequest<T>(request: Observable<T>): Observable<T>{
        return request.pipe(
            retry({delay: 1000}),
            takeUntil(this.unsubscribe$),
            shareReplay(1)
        )
    }

    private getOrFetch<T>(cache: Observable<T> | null, request: Observable<T>): Observable<T>{
        return cache ? cache : this.prepareAPIRequest(request)
    }

    getCourses(): Observable<CoursesByTechnology>{
        this.coursesCache = this.getOrFetch(this.coursesCache, this._getCourses())
        return this.coursesCache
    }

    getStudentFeedbacks(): Observable<StudentFeedback[]> {
        this.studentsFeedbackCache = this.getOrFetch(this.studentsFeedbackCache, this._getStudentFeedbacks())
        return this.studentsFeedbackCache
    }

    getMentors(): Observable<Mentor[]> {
        this.mentorsCache = this.getOrFetch(this.mentorsCache, this._getMentors())
        return this.mentorsCache
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(null)
        this.unsubscribe$.complete()
    }

    private _getCourses(): Observable<CoursesByTechnology>{
        return of(mockCourses).pipe(
            delay(50)
        )
    }

    private _getStudentFeedbacks(): Observable<StudentFeedback[]> {
        return of(mockStutendsFeedback).pipe(
            delay(50),
        )
    }

    private _getMentors(): Observable<Mentor[]> {
        return of(mockMentors).pipe(
            delay(50),
        )
    }
}