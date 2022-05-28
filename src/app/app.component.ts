import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVSClone';

  status: boolean = false;
  statusClass = 'not-active';
  constructor(private router: Router, private route: ActivatedRoute) { }
  
  clickEvent(){
      this.status = !this.status;           
  }
  clickEvent2(){     
      this.statusClass = 'white-bar';       
  }
  clickEvent3(){  
    if(!this.status == false)  {
      this.status = !this.status;   
    }
  }
   bikes = [
    {bikeImg : 'https://tvsnepal.com/images/product/RR-3105cf8d27280ff0rr310.png', Name : 'RR 310', Price: 799900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-200-4V-ABS5f395bfeb3883RTR-200-4v.png', Name : 'RTR 200 4V ABS', Price: 355900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh-RD60c1e30481403RTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh RD', Price: 304900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh-with-ABS60c1e1daa04afRTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh with ABS', Price: 324900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V5cf8d295e83ca160_4v.png', Name: 'RTR 160 4V FD', Price: 272900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh FD', Price: 287900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-RD60c1e66c9cb7dRTR-160-4V5cf8d295e83ca160_4v.png', Name : 'RTR 200 4V RD', Price: 290900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-200-4V-v2.05cf8d27f1a4e82004v.png', Name : 'RTR 200 4V v2.0',Price: 279900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-180-2V5cf8d28bdc940180_2v.png', Name: 'RTR 180 2V', Price: 324900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/RTR-160-2V60c1d5a54627bRTR-160-2V.png', Name : 'RTR 160 2V', Price: 269900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/Stryker-1255cf8d2b94fe18Stryker_125.png', Name : 'Stryker 125', Price: 196900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/Tvs-Max-1255ee9f1bbd4c52Untitled-1.png', Name : 'Tvs Max 125', Price: 241900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/Radeon5e048fac6b980Radeon.JPG', Name : 'Radeon', Price: 186900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/Xl-1005db1676b9e6c6xl100.png', Name : 'Xl 100', Price: 115900.00},
    {bikeImg : 'https://tvsnepal.com/images/product/Tvs-Stryker-125-Refresh60f1192556ecctvs-stryker-refresh.png', Name : 'Tvs Stryker 125 Refresh', Price: 208900.00}
  ]



  scooters = [
    {scooterImg: 'https://tvsnepal.com/images/product/Ntorq-Disc60c1d7c33ba12Matte-Red5e0490e0bad68Matte-red.png', Name: 'Ntorq Disc', Price: 253900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/Ntorq-Race-Edition60c1ff8accfba2-(1).png', Name: 'Ntorq Race Edition', Price: 269900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/Ntorq-Super-Squad-Edition60c1ff3daef442.png', Name: 'Ntorq Super Squad Edition', Price: 274900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/Ntorq-RTFI-BS660fe6f1d879eertfi-scooter-1-535x415.png', Name: 'Ntorq RTFI BS6', Price: 277900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/ntorq5cf8d2ef87fa1ntorq.png', Name: 'Ntorq Drum', Price: 221900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/TVS-Wego-FI60c1e0dd4628fWego5e04940de1e5aWhite.png', Name: 'TVS Wego FI', Price: 215900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/Dazz5cf8d2d170e58dazz.png', Name: 'Dazz', Price: 199900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/ZEST5cf8d2c5980adzest.png', Name: 'Zest', Price: 178900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/Jupiter5e048efd9d834autumn-brown.png', Name: 'Jupiter Classic', Price: 211900.00},
    {scooterImg: 'https://tvsnepal.com/images/product/Wego60c1df6216f46Wego5e04940de1e5aWhite.png', Name: 'Wego', Price: 207900.00}
  ]


  threeWheeler = [
    {threeWheelerImg: 'https://tvsnepal.com/images/product/TVS-Duramax5ee34a2b530a8Untitled-1.png', Name: 'TVS Duramax', Price: 574900.00},
    {threeWheelerImg: 'https://tvsnepal.com/images/product/TVS-King-Deluxe-Gs+5ed9fd166ddb3blue-king.png', Name: 'TVS King Deluxe Gs+', Price: 543900.00}
  ]

  accessories = [
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/RAIDING-GLOVES--BLACK-60c235876cda3Riding-gloves-1-(1).jpg', Name: 'RIDING GLOVES  BLACK ', Price: ' Rs. 3500'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-PANT-NEON-LINE60c2344b67d44riding-Pant-Neon-Line-1.jpg', Name: 'RIDING PANT NEON LINE', Price: ' Rs. 12000'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-PANT-NEON-LINE-60c233a8b7996Riding-Jacket-Neon-Line-1.jpg', Name: 'RIDING JACKET NEON LINE', Price: ' Rs. 13500'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-PANT-NEON-LINE-60c233a8b7996Riding-Jacket-Neon-Line-1.jpg', Name: 'RIDING PANT RED LINE L', Price: ' Rs. 12000'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-JACKET-REDLINE-60c2313702b75riding-jacket-1.jpg', Name: 'RIDING JACKET REDLINE', Price: 'Rs. 13500'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/SEAT-COVER-BLACK---NTORQ60c22edb3d9a4TVS-Ntorq-125-Seat-118601.jpg', Name: 'SEAT COVER BLACK - NTORQ', Price: 'Rs. 850'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/KIT-SCTR-GUARD---NTORQ60c22dc0132e4ntorqK2220530.jpg', Name: 'KIT SCTR GUARD - NTORQ', Price: 'Rs. 3800'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/Glove-Box-Assy---Ntorq60c22d5027c2cGLOVE-BOX-ASSY-(K2220370).jpg', Name: 'Glove Box Assy - Ntorq', Price: 'Rs. 450'},
    {accessoriesImg: 'https://tvsnepal.com/images/accessories/FLOOR-MAT-BLACK---NTORQ60c22b26d8775ntorqrepeatK2220450.jpg', Name: 'FLOOR MAT BLACK - NTORQ', Price: 'Rs. 400'},
  ]

  blogs = [
    {ID: 'Nepal-first-bike-scooter',blogImg: 'https://tvsnepal.com/images/blog/60b9f8406f19a.jpg', Name: 'Nepal’s first bike and scooter with SmartXConnect ', Date: '2021-06-04'},
    {ID: 'TVS-new-year-2078', blogImg: 'https://tvsnepal.com/images/blog/60c1a8320fa65.jpg', Name: 'TVS New Year 2078 | Wa Wah Wahhh offer | ', Date: '2021-06-04'},
    {ID: 'Women-on-bikes',blogImg: 'https://tvsnepal.com/images/blog/Women-on-bikes5e9067cb4b93fWhatsApp-Image-2020-03-02-at-3.33.11-PM.jpeg', Name: 'Women on bikes', Date: '2021-06-04'},
    {ID: 'Most-memorable-motorcycle-trip',blogImg: 'https://tvsnepal.com/images/blog/5e686f8594fd5.jpg', Name: 'Most memorable Motorcycle Trip – Of Brotherhoods and Perils', Date: '2020-03-10'},
    {ID: 'Tips-tricks-to-maintain-engine-in-winter',blogImg: 'https://tvsnepal.com/images/blog/TIPS-AND-TRICKS-TO-MAINTAIN-ENGINE-IN-WINTER5e3bc22fbaff5bde587e3-157f-463a-ac56-7e4ea48ab364.jpg', Name: 'TIPS AND TRICKS TO MAINTAIN ENGINE IN WINTER', Date: '2020-02-06'},
    {ID: 'Scooter-make-urban-commuting-easier',blogImg: 'https://tvsnepal.com/images/blog/5e184946d081b.jpg', Name: 'How does a scooter make urban commuting easier?', Date: '2020-01-09'},
    {ID: '5-best-places-to-go-on-a-bike-ride-in-Nepal',blogImg: 'https://tvsnepal.com/images/blog/-5-Best-Places-to-Go-on-a-Bike-Ride-in-Nepal-5df22fa36391a-5-Best-Places-to-Go-on-a-Bike-Ride-in-Nepal-5dca5f5e1520dIMG_20190320_133829.jpg', Name: '5 Best Places to Go on a Bike Ride in Nepal', Date: '2019-11-01'},
    {ID: 'How-to-clean-your-motocycle',blogImg: 'https://tvsnepal.com/images/blog/How-to-clean-your-motorcycle5cf8dc4f042a7Blog.png', Name: 'How to clean your motorcycle', Date: '2019-06-04'}
  ]
}
