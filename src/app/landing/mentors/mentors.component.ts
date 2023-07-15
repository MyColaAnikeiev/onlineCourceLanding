import { Component, OnInit } from '@angular/core';
import { MentorsService } from './mentors.service';
import { Observable } from 'rxjs';
import { Mentor } from '../shared/interfaces/mentor';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit{

  mentors$: Observable<Mentor[]> | undefined = undefined

  constructor(private mentorsService: MentorsService){
  }

  ngOnInit(): void {
    this.mentors$ = this.mentorsService.getMentors()
  }

}
