import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-offerproduct',
  templateUrl: './offerproduct.component.html',
  styleUrls: ['./offerproduct.component.css']
})
export class OfferproductComponent implements OnInit {

  constructor() { }

  OfferProductOptions: OwlOptions = {
    nav: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
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
  ngOnInit(): void {
  }


}
