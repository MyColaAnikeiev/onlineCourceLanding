import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFeedback, StudentFeedbacksRepository } from '../shared/interfaces/student-feedback';
import { RepositoryService } from '../shared/services/repository.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsFeedbackService {

  constructor(@Inject(RepositoryService) private repo: StudentFeedbacksRepository){}

  getFeedbacks(): Observable<StudentFeedback[]>{
    return this.repo.getStudentFeedbacks()
  }

}
