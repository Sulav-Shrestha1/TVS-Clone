import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css']
})
export class WarrantyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  policies = [
    { Name: 'Scooters', Image1: 'https://www.tvsmotor.com/-/media/Feature/Owners/Warranty-policy/5-years.jpg?la=en&hash=C2953D236592E9C2E3831EDD73AB9252', Image2: 'https://www.tvsmotor.com/-/media/Feature/Owners/Warranty-policy/scooters-warranty.jpg?la=en&hash=EA97B1E0A456FB14118326A9D4C047A9', p1: '5 years or', p2: '50,000 km on Scooters #'},
    { Name: 'Motorcycles', Image1: 'https://www.tvsmotor.com/-/media/Feature/Owners/Warranty-policy/5-years.jpg?la=en&hash=C2953D236592E9C2E3831EDD73AB9252', Image2: 'https://www.tvsmotor.com/-/media/Feature/Owners/Warranty-policy/bikes-warranty.jpg?la=en&hash=B5ED25F4B8347334C70BFBF5DE7141BD', p1: '5 years or', p2: '60,000 km on Motorcycles #'},
    { Name: 'Moped', Image1: 'https://www.tvsmotor.com/-/media/Feature/Owners/Warranty-policy/3-years.jpg?la=en&hash=11849724CD2AFB62109EF515FADA681C', Image2: 'https://www.tvsmotor.com/-/media/Feature/Owners/Warranty-policy/moped-warranty.jpg?la=en&hash=12270A50289C5E806A08473D5CE3924B', p1: '3 years or', p2: '36,000 km on Mopeds #'}
  ]
}
