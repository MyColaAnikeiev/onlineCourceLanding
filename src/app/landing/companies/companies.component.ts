import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  logoFiles = [
    'com_airbnb.svg',
    'com_hubspot.svg',
    'com_google.svg',
    'com_microsoft.svg',
    'com_walmart.svg',
    'com_fedex.svg'
  ]
}
