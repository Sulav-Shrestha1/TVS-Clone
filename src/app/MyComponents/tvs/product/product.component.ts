import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
 
  Options: OwlOptions = {
    nav: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['PRE', 'NEXT'],
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 1
      },
      1200: {
        items: 2
      },
      1500: {
        items: 3
      }
    }
  }


  ngOnInit(): void {
  }
  

  bikes = [
    { ID: 'rr310', bikeImg : 'https://tvsnepal.com/images/product/RR-3105cf8d27280ff0rr310.png', Name : 'RR 310', Price: 799900.00, Concept: 'Honed by rigorous testing and unlimited laps on the race track with key inputs and feedback by the TVS Racing Team to ensure ultimate control on the track and street. 35 years of Racing heritage-based expertise come standard with every TVS Apache RR 310. The race-derived 310cc powerplant makes upstream air being used effectively to pass through the air filter with ram effect. This innovative and unique design provides a compact engine layout resulting in mass centralization delivering best-in-class Power-to-Weight ratio.'},
    { ID: 'rtr200-4V-ABS', bikeImg : 'https://tvsnepal.com/images/product/RTR-200-4V-ABS5f395bfeb3883RTR-200-4v.png', Name : 'RTR 200 4V ABS', Price: 355900.00, Concept: 'The TVS Apache RTR 200 4V Spearheads its class with never before seen innovation. The track focused machine boasts of Single -Channel ABS l, an advanced slipper clutch system, and pushes technological boundaries even further with the race telemetry enabled SmartXonnect - a system that provides essential race statistics and riding data.'},
    { ID: 'rtr160-4V-r-RD', bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh-RD60c1e30481403RTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh RD', Price: 304900.00, Concept: 'All new Apache 160 4V with new looks and Smart Xonnect feature'},
    { ID: 'rtr160-4V-r-ABS', bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh-with-ABS60c1e1daa04afRTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh with ABS', Price: 324900.00, Concept: 'The nature of a champion is to outdo, and the TVS Apache RTR 160 4V being the most powerful bike in its class is engineered to outpower. Derived from the INMRC Championship winning bike – the RTR 165 Prototype, the bike has a heart of a champion. Race engineered with an unmistakable presence, the bike churns out 17.63 PS of power.'},
    { ID: 'rtr160-4V-FD', bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V5cf8d295e83ca160_4v.png', Name: 'RTR 160 4V FD', Price: 272900.00, Concept: 'The design of the RTR 1604V is refined on the racetrack. The form of the machine has a singular function, to be the quickest around the track. The bike has been sculpted to be dynamic through the corners while the sharp edges make it impose on the circuit. The chequered flag decals pay homage to our winning streak on the track.'},
    { ID: 'rtr160-4V-r-FD', bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh FD', Price: 287900.00, Concept: 'All new Apache 160 4V with new looks and Smart Xonnect feature'},
    { ID: 'rtr160-4V-RD', bikeImg : 'https://tvsnepal.com/images/product/RTR-160-4V-RD60c1e66c9cb7dRTR-160-4V5cf8d295e83ca160_4v.png', Name : 'RTR 200 4V RD', Price: 290900.00, Concept: 'The design of the RTR 1604V is refined on the racetrack. The form of the machine has a singular function, to be the quickest around the track. The bike has been sculpted to be dynamic through the corners while the sharp edges make it impose on the circuit. The chequered flag decals pay homage to our winning streak on the track.'},
    { ID: 'rtr200-4V-v2.0', bikeImg : 'https://tvsnepal.com/images/product/RTR-200-4V-v2.05cf8d27f1a4e82004v.png', Name : 'RTR 200 4V v2.0',Price: 279900.00, Concept: 'The Apache RTR 200 4V Race Edition 2.0 is the first motorcycle in its class to be equipped with an advanced A-RT Slipper Clutch, a race-derived technology to complement the racing DNA of RTR 200 4V Engine. The motorcycle sports all-new dynamic racing-inspired graphics based on an aero-form theme along with a stylish and exclusively designed fly-screen for an aggressive racing stance.'},
    { ID: 'rtr180-2V', bikeImg : 'https://tvsnepal.com/images/product/RTR-180-2V5cf8d28bdc940180_2v.png', Name: 'RTR 180 2V', Price: 324900.00, Concept: 'The Apache RTR 180 2V comes with all new graphics. It is powered by 180cc single cylinder air cooled 4 stroke engine.'},
    { ID: 'rtr160-2V', bikeImg : 'https://tvsnepal.com/images/product/RTR-160-2V60c1d5a54627bRTR-160-2V.png', Name : 'RTR 160 2V', Price: 269900.00, Concept: 'The Apache RTR 160 2V comes with all new graphics. It is powered by 160cc single cylinder air cooled 4 stroke engine.'},
    { ID: 'stryker-125', bikeImg : 'https://tvsnepal.com/images/product/Stryker-1255cf8d2b94fe18Stryker_125.png', Name : 'Stryker 125', Price: 196900.00, Concept: 'Stryker 125 is powered by 125cc single cylinder engine.'},
    { ID: 'tvs-max-125', bikeImg : 'https://tvsnepal.com/images/product/Tvs-Max-1255ee9f1bbd4c52Untitled-1.png', Name : 'Tvs Max 125', Price: 241900.00, Concept: ''},
    { ID: 'radeon', bikeImg : 'https://tvsnepal.com/images/product/Radeon5e048fac6b980Radeon.JPG', Name : 'Radeon', Price: 186900.00, Concept: 'TVS Radeon won commuter of the year award. TVS Radeon 110cc with 4 Stroke Duralife engine. It is built with super strong box Iron Chassis.'},
    { ID: 'Xl-100', bikeImg : 'https://tvsnepal.com/images/product/Xl-1005db1676b9e6c6xl100.png', Name : 'Xl 100', Price: 115900.00, Concept: 'Xl 100 is 4 stroke single cylinder 100cc engine with max power of 4.3 BHP. It has a built-in rugged chassis to withstand demands of any terrain.'},
    { ID: 'tvs-stryker-125-r', bikeImg : 'https://tvsnepal.com/images/product/Tvs-Stryker-125-Refresh60f1192556ecctvs-stryker-refresh.png', Name : 'Tvs Stryker 125 Refresh', Price: 208900.00, Concept: 'Stryker 125 refresh is powered by 125cc single cylinder engine.'}
  ];

  scooters = [
    { ID: 'ntorq-disc', scooterImg: 'https://tvsnepal.com/images/product/Ntorq-Disc60c1d7c33ba12Matte-Red5e0490e0bad68Matte-red.png', Name: 'Ntorq Disc', Price: 253900.00, Concept: "Ntorq is Nepal's First Bluetooth connected scooter. It is powered by 125cc with 9.4 PS incredible power.  With Smartxonnect users can get navigation assist, last parked location and caller id. You can get Ntorq in four different variants Disc variant, drum variant ,Race Edition and Super Squad Edition."},
    { ID: 'ntorq-race-edition', scooterImg: 'https://tvsnepal.com/images/product/Ntorq-Race-Edition60c1ff8accfba2-(1).png', Name: 'Ntorq Race Edition', Price: 269900.00, Concept: 'Ntorq Race Edition is a new variant of Ntorq with DRL ( Day Running Light), Hazard Switch and many more features including SmartXonnect.'},
    { ID: 'ntorq-super-squad-edition', scooterImg: 'https://tvsnepal.com/images/product/Ntorq-Super-Squad-Edition60c1ff3daef442.png', Name: 'Ntorq Super Squad Edition', Price: 274900.00, Concept: "With TVS Ntorq, we aren’t done until it's EPIC. Likewise our beloved new generation or Gen Z doesn’t settle for anything lesser. They want to feel like a superhero and ride like one. And that’s why we decided to bring together the Smartness of Ntorq with the Grandness of the Marvel universe in a first of its kind collaboration. Presenting NTORQ 125 X Marvel. Because when the ability to do great combines with the attitude of the Ntorq rider, epic happens."},
    { ID: 'tvs-Ntorq-RTFI-BS6', scooterImg: 'https://tvsnepal.com/images/product/Ntorq-RTFI-BS660fe6f1d879eertfi-scooter-1-535x415.png', Name: 'Ntorq RTFI BS6', Price: 277900.00, Concept: 'TVS Ntorq RTFI has superior performance backed by TVS Racing Pedigree and is the first scooter to be equipped with Race-Tuned Fuel Injection (RT-Fi). The BS6 compliant engine delivers 9.25 hp and 10.5 Nm of torque. While the power figure has seen a slight decrease by 0.15 hp, the torque output remains the same. TVS claims a best-in-class pickup, power and acceleration with the BS6 TVS Ntorq 125 Race Edition.'},
    { ID: 'ntorq', scooterImg: 'https://tvsnepal.com/images/product/ntorq5cf8d2ef87fa1ntorq.png', Name: 'Ntorq Drum', Price: 221900.00, Concept: "Ntorq is Nepal's First Bluetooth connected scooter. It is powered by 125cc with 9.4 PS incredible power.  With Smartxonnect users can get navigation assist, last parked location and caller id. You can get Ntorq in four different variants Disc variant, drum variant ,Race Edition and Super Squad Edition."},
    {ID: 'wego-fi', scooterImg: 'https://tvsnepal.com/images/product/TVS-Wego-FI60c1e0dd4628fWego5e04940de1e5aWhite.png', Name: 'TVS Wego FI', Price: 215900.00, Concept: 'TVS Wego now available in BS - VI model with Fuel Injection (FI)'},
    { ID: 'dazz', scooterImg: 'https://tvsnepal.com/images/product/Dazz5cf8d2d170e58dazz.png', Name: 'Dazz', Price: 199900.00, Concept: 'TVS Dazz DFi is a 109.65cc moped that is powered by a fuel injected motor. It is air cooled and produces a maximum of 8.7 BHP as well as 8.7 Nm of torque. The product is currently on sale in markets like Indonesia and Thailand. It is more of a cross between a scooter and a motorcycle while it uses an automatic gearbox like a traditional scooter. The 14 inch wheels are wrapped with 80 mm and 90 mm wheels on both front and rear end respectively. It weighs just 93 kg, making it more responsive than traditional machines with same sized engines.'},
    { ID: 'zest', scooterImg: 'https://tvsnepal.com/images/product/ZEST5cf8d2c5980adzest.png', Name: 'Zest', Price: 178900.00, Concept: 'Zest scooter is powered by 110 cc single  cylinder, 4 stroke, air cooled spark ignition system.'},
    { ID: 'jupiter', scooterImg: 'https://tvsnepal.com/images/product/Jupiter5e048efd9d834autumn-brown.png', Name: 'Jupiter Classic', Price: 211900.00, Concept: 'Jupiter is powered by 110cc 4 Stroke,Single cylinder,Air Cooled,OHC - BSIV Compliant.'},
    { ID: 'wego', scooterImg: 'https://tvsnepal.com/images/product/Wego60c1df6216f46Wego5e04940de1e5aWhite.png', Name: 'Wego', Price: 207900.00, Concept: "Travel in style with TVS Wego's international design that blends perfectly with its modern styling. If luxury, comfort and quality are what you seek, this is for you."},
    { ID: 'xl100', scooterImg: 'https://tvsnepal.com/images/product/Xl-1005db1676b9e6c6xl100.png', Name: 'Xl 100', Price: 115900.00, Concept: "Xl 100 is 4 stroke single cylinder 100cc engine with max power of 4.3 BHP. It has a built-in rugged chassis to withstand demands of any terrain."}
  ]

  threeWheeler = [
    { ID: 'tvs-duramax', threeWheelerImg: 'https://tvsnepal.com/images/product/TVS-Duramax5ee34a2b530a8Untitled-1.png', Name: 'TVS Duramax', Price: 574900.00, Concept: ''},
    { ID: 'tvs-king-deluxe', threeWheelerImg: 'https://tvsnepal.com/images/product/TVS-King-Deluxe-Gs+5ed9fd166ddb3blue-king.png', Name: 'TVS King Deluxe Gs+', Price: 543900.00, Concept: ''}
  ]

  


}
