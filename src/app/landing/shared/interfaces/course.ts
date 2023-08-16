import { Observable } from "rxjs"

export interface Course {
    href: string,
    category: string,
    name: string,
    image: string,
    price: number,
    numberOfClasses: number,
    studentGroupSize?: number,
    rating: number
}

export interface CoursesByTechnology{
    [technologyName: string]: Course[]
}

export interface CoursesRepository{
    getCourses(): Observable<CoursesByTechnology>
}