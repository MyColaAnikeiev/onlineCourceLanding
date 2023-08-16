import { Observable } from "rxjs"

export interface Mentor {
    url: string,
    imgSrc: string,
    fullname: string,
    expertise: string
}

export interface MentorsRepository{
    getMentors(): Observable<Mentor[]>
}