import { Observable } from "rxjs"

export interface StudentFeedback {
    img: string,
    name: string,
    institution: string,
    message: string
}

export interface StudentFeedbacksRepository{
    getStudentFeedbacks(): Observable<StudentFeedback[]>
}