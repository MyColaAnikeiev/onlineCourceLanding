import { Inject, Injectable } from "@angular/core";
import { RepositoryService } from "../shared/services/repository.service";
import { Mentor, MentorsRepository } from "../shared/interfaces/mentor";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MentorsService{
    constructor(@Inject(RepositoryService) private repo: MentorsRepository){}

    getMentors(): Observable<Mentor[]>{
        return this.repo.getMentors()
    }
}