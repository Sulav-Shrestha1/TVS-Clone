import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    nav: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }
  images = [
    {Name: 'RR310', Image: 'https://tvsnepal.com/images/slider/RR31060c229c3dd6132018-TVS-Apache-RR-310S-18.png'},
    {Name: 'Apache 200 4v ABS', Image: 'https://tvsnepal.com/images/slider/Apache-200-4v-ABS60c2298f9597cRTR-200-4V-ABS5f395bfeb3883RTR-200-4v.png'},
    {Name: 'Squad Edition', Image: 'https://tvsnepal.com/images/slider/Squad-Edition60c229a65e6a42020-TVS-Ntorq-125-SuperSquad-Marvel-Avengers-Edition.png'}
  ]

  ngOnInit(): void {
  }

}
