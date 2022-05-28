import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  careers = [
    {careerImg: 'https://tvsnepal.com/images/career/Regional-Sales-Officer-2W60f80127656aeRO-2W.jpg', Name: 'Service Engineer-2W Gandaki', Date: '2021-07-21'},
    {careerImg: 'https://tvsnepal.com/images/career/Regional-Sales-Officer-2W60f80127656aeRO-2W.jpg', Name: 'Regional Sales Officer-2W', Date: '2021-07-21'},
    {careerImg: 'https://tvsnepal.com/images/career/Regional-Sales-Officer-2W60f80127656aeRO-2W.jpg', Name: 'Business Development Officer-3W', Date: '2021-07-21'},
    {careerImg: 'https://tvsnepal.com/images/career/Regional-Sales-Officer-2W60f80127656aeRO-2W.jpg', Name: 'Manager- Institutional Sales', Date: '2021-07-21'},
    {careerImg: 'https://tvsnepal.com/images/career/Regional-Sales-Officer-2W60f80127656aeRO-2W.jpg', Name: 'Senior Sales Officer-4 Wheeler', Date: '2021-07-21'},
    {careerImg: 'https://tvsnepal.com/images/career/Regional-Sales-Officer-2W60f80127656aeRO-2W.jpg', Name: 'Regional Sales Officer-3W', Date: '2021-07-21'},
    {careerImg: 'https://tvsnepal.com/images/career/60c83d17b3090.jpg', Name: 'Assistant Product Manager-Two-Wheeler', Date: '2021-07-21'},

  ]
}
