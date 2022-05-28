import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TVSComponent implements OnInit {

  status: boolean = false;
  public id: any;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

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
    this.id = this.route.snapshot.paramMap.get('id');

    
  }

  onSelectBikes(bikes: { id: string; }) {
    this.router.navigate(['/ProductList',bikes.id]);
  }
  onSelectScooters(scooters: { id: string; }) {
    this.router.navigate(['/ProductList',scooters.id]);
  }
  onSelectThreeWheeler(threeWheeler: { id: string; }) {
    this.router.navigate(['/ProductList',threeWheeler.id]);
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

  bikeFeatures = [
    { ID: 'rr310', Image: 'https://tvsnepal.com/images/product/60c2cba8ad37eTVS-APACHE-RR310-BIKE-Red-2020-Excellence-Redefined-dashboard-scaled.jpg', Name: 'MIRC', div: 'Multi Information Race Computer', content: 'The TVS Apache RR 310 stays ahead in the race to the finish line not just on the track, but in the race to the future as well. The race machine is equipped with a smart connect enabled multi-information race computer.'},
    { ID: 'rr310', Image: 'https://tvsnepal.com/images/product/60c2caef292d4tvs-apace-rr-310-price-in-nepal-image-01.png', Name: 'Development', content: 'Honed by rigorous testing and unlimited laps on the racetrack with key inputs and feedback by the TVS racing team to ensure ultimate control on the track and street. racing heritage based on experience established since 1982, comes standard with every TVS Apache RR310.'},
    { ID: 'rr310', Image: 'https://tvsnepal.com/images/product/Concept60c1f89e13e7asura.png', Name: 'Concept', content: 'Inspired by the deadliest predator- the shark. the Apache RR310 is conceptualized do have an aggressive and ready to attack silhouette which is aided by are ranked high tail and ‘Mass- Forward and Minimalist Tail design. The Apache RR310 most powerful Apache till now, is based on Akula Concept which one the best concert bike off auto Expo 2016 at New Delhi.'},
    { ID: 'rr310', Image: 'https://tvsnepal.com/images/product/Tail-Light60c1f8ffebbafTail-Light.jpg', Name: 'Tail Light', content: 'Snake Fangs inspired LED tail lights complete the high sporty rake tail by giving the Apache RR310 a unique visual signature in its class'},
  ]

  bikeFeatures1 = [
    { ID: 'rtr200-4V-ABS', Image: 'https://tvsnepal.com/images/product/SMARTXCONNECT-TECHNOLOGY60c1c3705edd2connected.jpg', Name: 'SMARTXCONNECT TECHNOLOGY', content: 'The unique system is displayed on the racing console & TVS SmartXConnect app. The cutting-edge Bluetooth enabled system offers up a range of race analytics and data that allows any racer to review their racing style and constantly improve it on the track.'},
    { ID: 'rtr200-4V-ABS', Image: 'https://tvsnepal.com/images/product/SMARTXCONNECT-TECHNOLOGY60c1c78dce75cinfo-switch.jpg', Name: 'Performance', content: 'The all-new Apache RTR 200 4V now comes equipped with Eurogrip Protorq SR racing spec radial tyre, with increased traction control, stability, and durability that’ll give you the confidence to conquer those corners with ease. The motorcycle will also come fitted with first in its class high-performance radial rear tyre for enhanced stability and ride quality.'},
    { ID: 'rtr200-4V-ABS', Image: 'https://tvsnepal.com/images/product/Design-&-Safety60c2402452c63Design-&-Safety60c1e3df55c5bWave-Bite-Key.jpg', Name: 'Style', content: 'The all-new unique LED Headlamp with claw position lamps on the TVS Apache RTR 160 4V are aggressively styled to leave an imposing impression on the track & road. They enable enhanced visibility, long range light penetration and luminosity that’ll always keep the finish line well within both sight and reach. It also adds to the overall premium appeal.'},
    { ID: 'rtr200-4V-ABS', Image: 'https://tvsnepal.com/images/product/Design-&-Safety60c2402452c63Design-&-Safety60c1e3df55c5bWave-Bite-Key.jpg', Name: 'Design & Safety', content: 'The all-new unique LED Headlamp with claw position lamps on the TVS Apache RTR 160 4V are aggressively styled to leave an imposing impression on the track & road. They enable enhanced visibility, long range light penetration and luminosity that’ll always keep the finish line well within both sight and reach. It also adds to the overall premium appeal.'},
  ]

  bikeFeatures2 = [
    { ID: 'rtr160-4V-r-RD', Image: 'https://tvsnepal.com/images/product/SMARTXCONNECT-TECHNOLOGY60c1e3933cb30connected.jpg', Name: 'SMARTXCONNECT TECHNOLOGY', content: 'The unique system is displayed on the racing console & TVS SmartXConnect app. The cutting-edge Bluetooth enabled system offers up a range of race analytics and data that allows any racer to review their racing style and constantly improve it on the track.'},
    { ID: 'rtr160-4V-r-RD', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Performance', content: 'TVS Apache RTR 160 4V gets a 159.7 cc, 4-valve, oil-cooled engine with patented Race Derived O3C, that churns out max power of 17.63 PS. The engine is mated to a 5-speed super-slick gear box that offers a precise and powerful riding experience.'},
    { ID: 'rtr160-4V-r-RD', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Style', content: 'The all-new unique LED headlamp with claw position lamps on the TVS Apache RTR 160 4V are aggressively styled to leave an imposing impression on the track & road. They enable enhanced visibility, long range light penetration and luminosity that’ll always keep the finish line well within both sight and reach. It also adds to the overall premium appeal.'},
    { ID: 'rtr160-4V-r-RD', Image: 'https://tvsnepal.com/images/product/Design-&-Safety60c1e3df55c5bWave-Bite-Key.jpg', Name: 'Design & Safety', content: 'The bike now comes with a special Wave Bite Key that is specially programmed to prevent theft. The motorcycle and the key are programmed such that a duplicate key cannot be used to start the ignition, ensuring that your race machine responds only to you.'},
  ]
  bikeFeatures3 = [
    { ID: 'rtr160-4V-r-ABS', Image: 'https://tvsnepal.com/images/product/SMARTXCONNECT-TECHNOLOGY60c1e3933cb30connected.jpg', Name: 'SMARTXCONNECT TECHNOLOGY', content: 'The unique system is displayed on the racing console & TVS SmartXConnect app. The cutting-edge Bluetooth enabled system offers up a range of race analytics and data that allows any racer to review their racing style and constantly improve it on the track.'},
    { ID: 'rtr160-4V-r-ABS', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Performance', content: 'TVS Apache RTR 160 4V gets a 159.7 cc, 4-valve, oil-cooled engine with patented Race Derived O3C, that churns out max power of 17.63 PS. The engine is mated to a 5-speed super-slick gear box that offers a precise and powerful riding experience.'},
    { ID: 'rtr160-4V-r-ABS', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Style', content: 'The all-new unique LED headlamp with claw position lamps on the TVS Apache RTR 160 4V are aggressively styled to leave an imposing impression on the track & road. They enable enhanced visibility, long range light penetration and luminosity that’ll always keep the finish line well within both sight and reach. It also adds to the overall premium appeal.'},
    { ID: 'rtr160-4V-r-ABS', Image: 'https://tvsnepal.com/images/product/Design-&-Safety60c1e24ca8571abs-(1).jpg', Name: 'Design & Safety', content: 'Control has never been this exhilarating, the Apache RTR 160 4V now comes equipped with technology to slice up the track. The Single Channel Super-Moto ABS Unit had been developed and tested on the track. The system provides the ultimate braking control while allowing sharp feedback. The precise system to keep your braking and cornering, razor-sharp.'},
  ]
  bikeFeatures4 = [
    { ID: 'rtr160-4V-FD', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Performance', content: 'TVS Apache RTR 160 4V gets a 159.7 cc, 4-valve, oil-cooled engine with patented Race Derived O3C, that churns out max power of 17.63 PS. The engine is mated to a 5-speed super-slick gear box that offers a precise and powerful riding experience.'},
    { ID: 'rtr160-4V-FD', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Style', content: 'The all-new unique LED headlamp with claw position lamps on the TVS Apache RTR 160 4V are aggressively styled to leave an imposing impression on the track & road. They enable enhanced visibility, long range light penetration and luminosity that’ll always keep the finish line well within both sight and reach. It also adds to the overall premium appeal.'},
    { ID: 'rtr160-4V-FD', Image: 'https://tvsnepal.com/images/product/DESIGN-&-SAFETY60c4874f0441cabs.jpg', Name: 'Design & Safety',p: 'The bike now comes with Single Channel Super-Moto ABS ', p1: 'Control has never been this exhilarating, the Apache rRTR 160 4v now comes equipped with technology to slice up the track. The' ,b: 'Single Channel Super Moto ABS', content: 'unit had beed develped and tested on the track. The system povides the ultimate braking control while allowing sharp feedback . The precise system to keep your braking and cornering, razor-sharp.'},
  ]

  bikeFeatures5 = [
    { ID: 'rtr160-4V-r-FD', Image: 'https://tvsnepal.com/images/product/SMARTXCONNECT-TECHNOLOGY60c1c3705edd2connected.jpg', Name: 'SMARTXCONNECT TECHNOLOGY', content: 'The unique system is displayed on the racing console & TVS SmartXConnect app. The cutting-edge Bluetooth enabled system offers up a range of race analytics and data that allows any racer to review their racing style and constantly improve it on the track.'},
    { ID: 'rtr160-4V-r-FD', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Performance', content: 'TVS Apache RTR 160 4V gets a 159.7 cc, 4-valve, oil-cooled engine with patented Race Derived O3C, that churns out max power of 17.63 PS. The engine is mated to a 5-speed super-slick gear box that offers a precise and powerful riding experience.'},
    { ID: 'rtr160-4V-r-FD', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Style', content: 'The all-new unique LED headlamp with claw position lamps on the TVS Apache RTR 160 4V are aggressively styled to leave an imposing impression on the track & road. They enable enhanced visibility, long range light penetration and luminosity that’ll always keep the finish line well within both sight and reach. It also adds to the overall premium appeal.'},
    { ID: 'rtr160-4V-r-FD', Image: 'https://tvsnepal.com/images/product/Design-&-Safety60c1e3df55c5bWave-Bite-Key.jpg', Name: 'Design & Safety', content: 'The bike now comes with a special Wave Bite Key that is specially programmed to prevent theft. The motorcycle and the key are programmed such that a duplicate key cannot be used to start the ignition, ensuring that your race machine responds only to you.'},
  ]

  bikeFeatures6 = [
    { ID: 'rtr160-4V-RD', Image: 'https://tvsnepal.com/images/product/Performance60c49146b0509Performance60c1e3ab560b3engine.jpg', Name: 'Performance', b: 'INMRC Championship Winning Engine:', content: 'The Oil-cooled 4 Valve, short stroke racing engine produces 16.5 PS @ 8,000 RPM. The power plant is derived from the 6-time INMRC winning RTR 165 prototype.'},
    { ID: 'rtr160-4V-RD', Image: 'https://tvsnepal.com/images/product/Style60c4922827e9bracing-consol.jpg', Name: 'Style',b: 'Digital Racing Console:', p: 'The high-tech race computer records top speed, the 0-60 time and provides a gear shift indicator to the racer.', b1: 'Imposing Headlamp:', content: 'Aggression meets functionality with the High-intensity LED Position Lamps with a unique fang design.'},
    { ID: 'rtr160-4V-RD', Image: 'https://tvsnepal.com/images/product/Design-&-Safety60c1e3df55c5bWave-Bite-Key.jpg', Name: 'Design & Safety', content: 'The bike now comes with a special Wave Bite Key that is specially programmed to prevent theft. The motorcycle and the key are programmed such that a duplicate key cannot be used to start the ignition, ensuring that your race machine responds only to you.'},
  ]

  bikeFeatures7 = [
    { ID: 'rtr200-4V-v2.0', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Performance',b: 'Race-Derived O3C Tech', p: 'Power ahead of the pack with oil-cocled combustion chamber technology and ram air-assisted cooling that reduces the engine heat map by 10°C. Harness explosive power from the high combustion Nanofriks coated piston.', b1: 'Remora Racing Tyres', content: 'Get unyielding Remora fish-like grip on the track, The Apache RTR 200 4V also comes with optional Race-Spec Tyres for added performance.'},
    { ID: 'rtr200-4V-v2.0', Image: 'https://tvsnepal.com/images/product/A-RT-Slipper-Clutch60c4d6b8d3899a-rt-slipper-clutch.png', Name: 'A-RT Slipper Clutch', b: 'First-in-segment Anti-Reverse Torque Slipper Clutch', content: 'First-in-segment Anti-Reverse Torque Slipper Clutch. The A-RT technology reduces back torque to a minimum allowing aggressive downshifts without experiencing wheel hopping, The 22% reduction in clutch force helps in quick launches and precise upshifts enabling you to clock better lap times'},
    { ID: 'rtr200-4V-v2.0', Image: 'https://tvsnepal.com/images/product/SMARTXCONNECT-TECHNOLOGY60c1c3705edd2connected.jpg', Name: 'SMARTXCONNECT TECHNOLOGY', content: 'The unique system is displayed on the racing console & TVS SmartXConnect app. The cutting-edge Bluetooth enabled system offers up a range of race analytics and data that allows any racer to review their racing style and constantly improve it on the track.'},
    { ID: 'rtr200-4V-v2.0', Image: 'https://tvsnepal.com/images/product/Style60c4dbd015a4dracee.jpg', Name: 'Style', content: 'The Apache RTR 200 4V Race Edition 2.0 came with  new graphics, and a fly-screen for enhanced aerodynamics.'},
  ]

  bikeFeatures8 = [
    { ID: 'rtr180-2V', Image: 'https://tvsnepal.com/images/product/Performance60c1e3ab560b3engine.jpg', Name: 'Performance',b: 'RT-FI OVERSQUARE ENGINE:', p: 'The oversquare engine powered by Race Tuned Fuel Injection delivers blistering performance in any race condition. Because racing performance should always be unconditional..', b1: 'GLIDE THROUGH TECHNOLOGY', content: 'This first-in-segment feature allows for effortless launches off the line, with a slow release of the clutch and no throttle operation'},
    { ID: 'rtr180-2V', Image: 'https://tvsnepal.com/images/product/Digital-Display60c789fd1905esculpted-digital-display.png', Name: 'Digital Display', p: 'SCULPTED DIGITAL DISPLAY', content: 'The console features a lap timer, top speed indicator, and also displays other essential information. It is backlit for visibility in any condition.'},
    { ID: 'rtr180-2V', Image: 'https://tvsnepal.com/images/product/Racing-Presence60c78eed7dc46styleee.jpg', Name: 'Racing Presence',b: 'BEAST-INSPIRED HEADLAMPS', p: 'These headlamps with LED guide lights resemble a pair of animalistic eyes, a clear symbol of dominance. The throw from the headlamps provides clear visibility.', b1: 'ALCANTARA-LIKE RACING SEAT', p1: 'The racing seat gives the racer maximum comfort, even in the longest, most challenging roads & terrains.', b2: 'MUSCLED TANK',content: 'The chiseled tank sports unique race graphics, and has a muscular appearance. The tank also reduces engine heat by 10°C, doubling as both an essential performance feature and a statement of pure racing presence.'},
    { ID: 'rtr180-2V', Image: 'https://tvsnepal.com/images/product/SUPER-MOTO-ABS60c78faa2c7f7abs.jpg', Name: 'SUPER-MOTO ABS',b: 'SUPER-MOTO ABS', content: 'The Single Channel Super-Moto ABS has been honed and perfected by racers on the track. The system provides ultimate braking control and delivers supreme braking feedback, giving the racer confidence and safety.'},
  ]
  bikeFeatures9 = [
    { ID: 'rtr160-2V', Image: 'https://tvsnepal.com/images/product/Performance60c1d62713384rtr-over-square.jpg', Name: 'Performance',content: 'The TVS Apache RTR 160 is powered by the BS-IV stage engine. The intelligent system has optimized the engine, so that racers can experience the ultimate performance from the engine in any race condition.'},
    { ID: 'rtr160-2V', Image: 'https://tvsnepal.com/images/product/Digital-Display60c789fd1905esculpted-digital-display.png', Name: 'Style', content: "The signature LED's on the Apache have been an intimidating presence on the track. The LED light guide in the headlamp panel along with the pilot lamps produces an intense, raw, animalistic gaze. The throw from the headlamps cut through the harshest conditions to ensure clear visibility."},
    { ID: 'rtr160-2V', Image: 'https://tvsnepal.com/images/product/Safety60c1d6714e5bbRemora-tyers.jpg', Name: 'Safety',content: 'Grip the track like never before, the Remora tyre stick to the asphalt with unyielding grip. The tyre offer superior acceleration and improved braking.'},
  ]
  
  bikeFeatures10 = [
    { ID: 'stryker-125', Image: 'https://tvsnepal.com/images/product/Performance60c7979780ce815-More-Mileage-Unit01.png', Name: 'Performance',b: '15% More Mileage', content: 'Best In Class Mileage.'},
    { ID: 'stryker-125', Image: 'https://tvsnepal.com/images/product/Digital-Display60c797f997a64phoenix-speedometer.jpg', Name: 'Digital Display', content: 'The console features a lap timer, top speed indicator, and also displays other essential information. It is backlit for visibility in any condition.'},
    { ID: 'stryker-125', Image: 'https://tvsnepal.com/images/product/Safety60c7989ff20ccs-l640.jpg', Name: 'Safety', b : 'Grip Tires', content: 'High Performance grip tyres provides superior road grip and longer life.'},
    { ID: 'stryker-125', Image: 'https://tvsnepal.com/images/product/Comfort60c7995911bc4Stryker-1255cf8d2b94fe18Stryker_125.png', Name: 'Comfort', b: 'Telescopic Oil Damped shock Absorber', content: 'Ensure Comfortable rides'},
  ]

  bikeFeatures12 = [
    { ID: 'radeon', Image: 'https://tvsnepal.com/images/product/Build60c1da1c38b5e002.jpgg', Name: 'Build',p: 'Long Lasting Dura-Life Engine', content: 'Ensures High Mileage and Performance for Years'},
    { ID: 'radeon', Image: 'https://tvsnepal.com/images/product/Digital-Display60c797f997a64phoenix-speedometer.jpg', Name: 'Digital Display', p: 'Car like Speedometer', content: 'Chrome mounted Meter for your seamless ride.'},
    { ID: 'radeon', Image: 'https://tvsnepal.com/images/product/Comfort60c1dab7da5b4001.jpg', Name: 'Comfort', p : 'Largest Cushion Seat', content: 'A comfortable ride for you and your loved ones.'},
    { ID: 'radeon', Image: 'https://tvsnepal.com/images/product/Convenience60c1dae2ce46a002-(1).jpg', Name: 'Covenience', b: 'Lady pillion handle with hook', content: 'Comfort for female pillion riders while you also carry your daily essentials.'},
    { ID: '13', Image: 'https://tvsnepal.com/images/product/Safety60c1db0cc936b001-(1).jpg', Name: 'Safety', p: 'Synchronized Braking Technology (SBT)', content: 'Advanced braking ensuring shorter braking distance.'},
  ]

  EnginePerformanceBike = [
    { ID: 'rr310', Type: 'SI, 4 stroke, 4 valve, Single cylinder, Liquid cooled, Reverse inclined', EngineCapacity: '312.2 cm3', FuelInjection: 'Bosch - Closed loop RT-FI', MaxTorque: '27.3 Nm@7700 engine rpm', ValuePerCyliner: '4 Valves', Starting: 'Electric Start', PowerWightRatio: '0.144 kW/kg', GearBox: '6 speed gear box ', Clutch: 'Wet multi plate - 7 plate design, RT slipper clutch', MaxSpeed: '160 km/h'},

    { ID: 'rtr200-4V-ABS', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '197.75 cm3', MaximumPower: '15.32 kW @ 9000 rpm (20.82 PS)', MaxTorque: '17.25 Nm @ 7250 rpm', ValuePerCyliner: '4 Valves', Starting: 'Electric Start', PowerWightRatio: '0.1 kW/kg', GearBox: '5 speed ', MaxSpeed: '114 km/h'},

    { ID: 'rtr160-4V-r-RD', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '159.7 cm3', MaximumPower: '12.97 kW @ 9250 rpm (17.63 PS @ 9250 rpm)', MaxTorque: '14.73 Nm @ 7250 rpm', ValuePerCyliner: ' 4 Valves', Starting:'Electric Start', PowerWightRatio: ' 0.08 kW/kg', GearBox: '5 speed', MaxSpeed: '114 km/h'},

    { ID: 'rtr160-4V-r-ABS', Type:'SI, 4- stroke, Oil-Cooled', EngineCapacity: '159.7 cm3' , MaximumPower: '12.97 kW @ 9250 rpm (17.63 PS @ 9250 rpm)', MaxTorque: '14.73 Nm @ 7250 rpm', ValuePerCyliner: ' 4 Valves', Starting:'Electric Start', PowerWightRatio: ' 0.08 kW/kg', GearBox: '5 speed', MaxSpeed: '114 km/h'},

    { ID: 'rtr160-4V-FD', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: ': 159.7 cm3', MaximumPower: ': 20.23 BHP @ 8,500 RPM', MaxTorque: '14.12 NM @ 7,250 RPM', ValuePerCyliner: '4 valves', Starting: 'Electric & Kickstart', PowerWightRatio: ': 0.0849kW/kg', GearBox: ': 5 Speed', MaxSpeed: ': 114 km/h'},

    { ID: 'rtr160-4V-r-FD', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: ' 159.7 cm3', MaximumPower: ' 12.97 kW @ 9250 rpm (17.63 PS @ 9250 rpm)', MaxTorque: '14.73 Nm @ 7250 rpm' ,ValuePerCyliner: '4 Valves', Starting:'Electric Start', PowerWightRatio: ' 0.08 kW/kg', GearBox: '5 speed', MaxSpeed: ' 114 km/h'},

    { ID: 'rtr160-4V-RD', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '159.7 cm3', MaximumPower: '12.14kW @8000 rpm ', MaxTorque: '14.8Nm @6500rpm ', ValvePerCylinder: '4 valves ', Starting: 'Electric and Kickstart ', PowerWeightRatio: '0.0849kW/kg', GearBox: '5 Speed gearbox'},
   
    { ID: 'rtr200-4V-v2.0', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '197.75 cm3', MaximumPower: '21 PS @ 8500 rpm', MaxTorque: '18.1 Nm @ 7000 rpm', ValvePerCylinder: '4 Valves', Starting: 'Electric Start', GearBox: '5 speed gear box' },

    { ID: 'rtr180-2V', Type: ' SI, 4- stroke, Oil-Cooled', EngineCapacity: ' 177.4 cm3', MaximumPower: ' 12.35kW @8500 rpm', MaxTorque: ' 15.5Nm @7000rpm', ValvePerCylinder: ' 2 valves', Starting: ' Electric', PowerWeightRatio: ' 0.0876kW/kg', GearBox: ' 5 Speed gearbox', CoolingSystem: 'Oil cooled', Clutch: ' Wet multi plate clutch'},

    { ID: 'rtr160-2V', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '159.7 cm3', MaximumPower: '11.42 kW @ 8400 rpm (15.53 PS @ 8400 rpm)', MaxTorque: ' 13.9 Nm @ 7000 rpm', ValvePerCylinder: '2 Valves', Starting: 'Electric Start', PowerWeightRatio: '0.0822 kW/kg', GearBox: '5 speed gear box' },

    { ID: 'stryker-125', Type: 'Single Cylinder, Air-cooled, Ecothrust Engine', EngineCapacity: '124.53 cm3', MaximumPower: '10.86 bhp @ 8000 rpm', MaxTorque: ' 10.8 Nm @ 5500 rpm', Starting: 'Electric Push Start and Kick Start', GearBox: '4 speed gear box', Clutch: 'Wet, multi-plate' },

    { ChassisID: 'radeon', Type: 'Single cradle tubular frame', SuspensionFront: 'Telescopic hydraulic type', SuspensionRear: ' Toggle link with hydraulic damper' },

    { ID: 'radeon', Type: ' Single cylinder, 4- stroke, Air-Cooled', Displacement: '124.5 cc', MaxNetPower: '8.0 (11 bhp) @ 8000 rpm', MaxNetTorque: '10.8 Nm @ 5500 rpm', Starting: 'Electric', Ignition: 'DC-Digital TCI', FuelSystem: 'Carburetor, UCAL UCD 25', NumberOfSpeedGears: '4 Speed' },

    { ID: 'Xl-100', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '159.7 cm3', MaximumPower: '11.42 kW @ 8400 rpm (15.53 PS @ 8400 rpm)', MaxTorque: ' 13.9 Nm @ 7000 rpm', ValvePerCylinder: '2 Valves', Starting: 'Electric Start', PowerWeightRatio: '0.0822 kW/kg', GearBox: '5 speed gear box' },

    { ID: 'tvs-stryker-125-r', Type: ' 4 Stroke, Fuel Injection, Air Cooled', Displacement: '109.7 Cc', Efisystem: 'Etfi (Eco-Thrust Fuel Injection)', MaxPower: '4,03 Kw 7350 Rpm', MaxTorque: '8.7 Nm 4500 Rpm', BorexStroke:  '53.5 Mmx 48,8 Mm', CompressionRatio: '10,0:1', Transmission: '4 Speed Constant Mesh', Clutch: 'Wet, Multiple-Disc'},
      
  ]

  ChasisSuspensionElectricalBike = [
    { ID: 'rr310', Frame: 'Trellis frame, split chassis', FrontSuspension: 'Inverted cartridge telescopic Fork', RearSuspension: 'Mono tube floating piston gas assisted shock absorber', Battery: '12V, 8Ah ', Headlamp: 'Bi-LED projector, 30W@13 V', Taillamp: 'LED 4W'},

    { ID: 'rtr200-4V-ABS', Frame: 'Double cradle Split Synchro Stiff Frame', FrontSuspension: ' Telescopic Fork', RearSuspension: ' Mono Tube - Mono Shock', Battery: ' 12V, 8Ah VRLA', Headlamp: ' AHO LED Headlamp with LED position lamp', Taillamp: 'LED 2.5W'},

    { ID: 'rtr160-4V-r-RD', Frame: 'Double cradle Split Synchro Stiff Frame', FrontSuspension: ' Telescopic Fork', RearSuspension: ' Mono Shock', Battery: ' 12V, 8Ah MF', Headlamp: ' AHO LED Headlamp with LED position lamp', Taillamp: 'LED'},

    { ID: 'rtr160-4V-r-ABS', Frame: ' Double cradle Split Synchro Stiff Frame ', FrontSuspension: ' Telescopic Fork', RearSuspension: ' Mono Shock', Battery: ' 12V, 8Ah MF', Headlamp: ' AHO LED Headlamp with LED position lamp', Taillamp: 'LED'},

    { ID: 'rtr160-4V-FD', Chassis: 'Double cradle Split', FrontSuspension: 'Telescopic Forks', RearSuspension: ':  Monoshock', Battery: ': 12V/9Ah', Headlamp: ': AHO LED Headlamp with LED position lamp', Taillamp: 'LED'},

    { ID: 'rtr160-4V-r-FD', Frame: 'Double cradle Split Synchro Stiff Frame', FrontSuspension: ' Telescopic Fork', RearSuspension: ' Mono Shock', Battery: ' 12V, 8Ah MF', Headlamp: ' AHO LED Headlamp with LED position lamp', Taillamp: 'LED'},

    { ID: 'rtr160-4V-RD', Frame: 'Double Cradle Slit Synchro ', FrontSuspension: 'Telescopic Forks', RearSuspension: 'Monoshox ', Battery: '12V ', Headlamp: 'AHO LED Headlamp with LED position lamp'},

    { ID: 'rtr200-4V-v2.0', Frame: 'Double cradle Split Synchro Stiff Frame', FrontSuspension: 'Telescopic Fork ', RearSuspension: 'Mono Tube - Mono Shock', Battery: '12V, 9Ah VRLA', Headlamp: 'Halogen with LED position lamp',  Taillamp: 'LED ' },

    { ID: 'rtr180-2V', Frame: ' Double Cradle Synchros STIFF', FrontSuspension: ' Telescopic Forks', RearSuspension: ' Monotube Invented Gas filled shox', Battery: '12V 8Ah MF', Headlamp: ' Halogen HS1 12V/35W with AHO',  Taillamp: ' LED' },

    { ID: 'rtr160-2V', Frame: 'Double cradle Synchro Stiff ', FrontSuspension: 'Telescopic Fork with Hydraulic Dampers. 105mm Stroke', RearSuspension: 'Monotube Inverted Gas-filled shox (MIG) with spring aid', Battery: '12V, 8Ah MF', Headlamp: 'Halogen HS1 12V 35/35W with AHO, Clear lens with MFR with LED position lamp',  Taillamp: 'LED' },

    { ID: 'stryker-125', Frame: 'Double cradle Synchro Stiff ', FrontSuspension: 'Telescopic Fork with Hydraulic Dampers. 105mm Stroke', RearSuspension: 'Monotube Inverted Gas-filled shox (MIG) with spring aid', Battery: '12V, 8Ah MF', Headlamp: 'Halogen HS1 12V 35/35W with AHO, Clear lens with MFR with LED position lamp',  Taillamp: 'LED' },

    { ID: 'tvs-max-125', Frame:' Single Cradle Tubular Frame', FrontSuspension: 'Telescopic Oil Damped', RearSuspension: 'Dual Spring Suspension' },
    
    { ID: 'radeon', ChassisType: ' Single Cradle Tubular Frame', FrontSuspension: 'Telescopic Oil Damped Shock Absorber', RearSuspension: ' 5 Step Adjustable Hydraulic Shock Absorber', FuelTank: ' 10 Litres', Battery: ' 12v - 4ah Maintenance Free (Mf)', Headlamp: ' 12v-35/35w Multi-Reflector With Led Drl (5w)' },

  ]


  WheelTyreBrakeBike = [
    { ID: 'rr310', FrontTyre: '110/70 R17 Tubeless - Michelin Pilot Street', RearTyre: '150/60 R17 M/C 62P Tubeless - Michelin Pilot Street', BrakeFluid: 'DOT 4', Front: 'Disc 300mm Petal type with ABS', Rear: ' Disc 240mm Petal type with ABS'},

    { ID: 'rtr200-4V-ABS', FrontRim: '1.85x17', RearRimDrum: '- 2.15x17 | Disc - 3.5x17', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: ' 110/80-17 57P Tubeless 130/70-17 M/c 62P Tubeless', BrakeFluid: ' 200mm dia Petal Disc DOT 3 / DOT 4', Front: ' 270mm dia Petal Disc', Rear: ' 130mm dia Drum /'},

    { ID: 'rtr160-4V-r-RD', FrontRim: '1.85x17', RearRimDrum: '- 2.15x17 | Disc - 3.5x17', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: ' 110/80-17 57P Tubeless 130/70-17 M/c 62P Tubeless', ABS: ' Single Channel Super-Moto ', BrakeFluid: ' 200mm dia Petal Disc DOT 3 / DOT 4', Front: ' 270mm dia Petal Disc', Rear: ' 130mm dia Drum /'},

    { ID: 'rtr160-4V-r-ABS', FrontTyre: '90/90-17 49p Tubeless', RearTire: '110/80-17 57p Tubeless', BrakeFluid: '200mm dia petal Disc DOT 3 / DOT 4', Front: ':270mm dia petal Disc', Rear: ': 130mm dia Drum'},

    { ID: 'rtr160-4V-FD', FrontRim: '1.85x17', RearRimDrum: '- 2.15x17 | Disc - 3.5x17', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: ' 110/80-17 57P Tubeless 130/70-17 M/c 62P Tubeless', BrakeFluid: '200mm dia Petal Disc DOT 3 / DOT 4', Front: ' 270mm dia Petal Disc', Rear: ' 130mm dia Drum /'},

    { ID: 'rtr160-4V-r-FD', FrontTyre: '90/90-17 49p Tubeless ', RearTyre: '110/80-17 57p Tubeless', BreakFluid: '200mm dia petal Disc', Front: '270mm dia petal Disc ', Rear: '130mm dia Drum'}, 
 
    { ID: 'rtr160-4V-RD', FrontTyre: '90/90-17 49P Tubeless', RearTyre: '110/80-17 Tubeless',  BreakFluid: 'DOT 3 / DOT 4',  Front: '270mm dia Petal Disc',Rear: '240mm dia Petal Disc', WheelRim: ' Front: 1.85 x 17 (Alloy) | Rear: 3.50 x 17 (Alloy) ' },

    { ID: 'rtr200-4V-v2.0', FrontTyre: ' 90/90-17 49p Tubeless', RearTyre: ' 110/80-17 57p Tubeless', BreakFluid: ' 200mm dia petal Disc DOT3/DOT4',  Front: ' 270mm dia petal Disc',Rear: ' 200mm dia Drum' },

    { ID: 'rtr180-2V', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: '110/80-17 57P Tubeless ',  BreakFluid: ' DOT 3 / DOT 4',  Front: '270mm dia Petal Disc',Rear: 'Drum - 130mm dia Drum Disc - 200mm dia Petal Disc' },

    { ID: 'rtr160-2V', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: '110/80-17 57P Tubeless ',  BreakFluid: ' DOT 3 / DOT 4',  Front: '270mm dia Petal Disc',Rear: 'Drum - 130mm dia Drum Disc - 200mm dia Petal Disc' },

    { ID: 'stryker-125', FrontTyre: ' 2.75 x 17" Tubeless', RearTyre: '90/90 -17, Tubeless',  Front: '240 mm Disc Brake',Rear: '130mm Drum Brake'},

    { ID: 'tvs-max-125', FrontTyre: 'Drum 2.75*17 (Tube type) Disc 2.75*17 tubeless', RearTyre: 'Drum 90/90*17 (Tube type)Disc 90/90*17 tubeless', WheelSize: 'Front : 17 inch, Rear :-17 inch', FrontBrakes: 'Hand operated, 240mm dia.disc', RearBrakes: 'Foot operated, internally expanding 130mm dia.drum' },

    { ID: 'radeon', FrontBrakeBase: 'Drum /130mm', FrontBrakeCoty: ' Drum/ 240 Mm', RearBrakes: ' Drum /130mm(Sync)', FrontTyre: 'Tubeless-2.75x 18', RearTyre: 'Tubeless - 3.00 X 18', Length: '2025 Mm', Width: '705mm', Height: '1080mm', WheelBase: '1265mm',GroundClearance: ' 180mm', Kerbweight: '116kg' },
  ]

  DimensionWeightFuelTankCapacityBike = [
    { ID: 'rr310', FuelTankCapacity: '11 L', GroundClearance: '180 mm', Height: '1135 mm', Length: '2001 mm', Width: '786 mm', KerbWeight: '174 kg', Saddle: 'Height 810 mm', Wheelbase: '1365 mm', MaxPayload: '130 kg'},

    { ID: 'rtr200-4V-ABS', FuelTankCapacity: ' Full 12 L', GroundClearance: ' 180 mm', Height: ' 1050 mm', Length: ' 2035 mm', Width: ' 790 mm', KerbWeight: '152 kg', Reserve: '2.5L', Saddle: 'Height 800 mm', Wheelbase: '1353 mm'},

    { ID: 'rtr160-4V-r-RD', FuelTankCapacity: ' Full 12 L', GroundClearance: ' 180 mm', Height: ' 1050 mm', Length: ' 2035 mm', Width: ' 790 mm', KerbWeight: ' Drum: 145 kg | Disc: 147 kg', Saddle: 'Height 800 mm ', Wheelbase: '1357 mm'},

    { ID: 'rtr160-4V-r-ABS', FuelTankCapacity: ' Full 12 L ', GroundClearance: ' 180 mm ', Height: ' 1050 mm ', Length: ' 2035 mm ', Width: ' 790 mm ', KerbWeight: ' Drum: 145 kg | Disc: 147 kg ', Saddle: ' Height 800 mm', Wheelbase: '1357 mm'},

    { ID: 'rtr160-4V-FD', FuelTankCapacity: ' Full: 12 L', FuelTankCapacityReserve: '2.5L', GroundClearance: ': 180mm  ', Height: ': 1050mm  ', Length: ': 2035mm  ', Width: ': 790mm  ', Saddle: ' Height 800mm', Wheelbase: '1357mm'},

    { ID: 'rtr160-4V-r-FD', FuelTankCapacity: ' Full 12 L     ', GroundClearance: '180 mm', Height: ' 1050 mm ', Length: ' 2035 mm ', Width: ' 790 mm ', KerbWeight: ' Drum: 145 kg | Disc: 147 kg ', Saddle: 'Height 800 mm', Wheelbase: '1357 mm'},

    { ID: 'rtr160-4V-RD', FuelTankCapacity: '12 L', FuelTankCapacityReserve: '2.5L', GroundClearance: '180mm', Height: '1050mm', Length:
    '2050mm', Width:'790mm', KerbWeight: '145 Kg', Saddle: 'Height 800mm', Wheelbase: '~1357mm'},
   
    { ID: 'rtr200-4V-v2.0', FuelTankCapacity: '12 L', GroundClearance: '180 mm', Height: '1105 mm', Length: '2050 mm', Width: '790 mm', KerbWeight: '148kg', Reserve: '2.5L', Saddle: 'Height 800 mm', Wheelbase: ' 1353 mm' },
  
    { ID: 'rtr180-2V', FuelTankCapacity: ' 12 L', GroundClearance: ' 170mm',  Height: ' 1105mm', Length: ' 2085mm', Width: ' 730mm', KerbWeight: '141 Kg', Saddle: 'Height 790mm', Wheelbase: '1326mm' },
  
    { ID: 'rtr160-2V', FuelTankCapacity: ' 12 L', GroundClearance: ' 180 mm', Height: '1150 mm', Length: '2085 mm', Width: '730 mm', KerbWeight: '139 kg | Disc: 140 kg', Saddle: 'Height 79 0 mm', Wheelbase: ' 1300 mm' },
  
    { ID: 'stryker-125', FuelTankCapacity: ' 12 L', GroundClearance: ' 180 mm', Height: '1150 mm', Length: '2085 mm', Width: '730 mm', KerbWeight: '139 kg | Disc: 140 kg', Saddle: 'Height 79 0 mm', Wheelbase: ' 1300 mm' },
  
    { ID: 'tvs-max-125', FuelTankCapacity: ' 10 L', GroundClearance: ' 180 mm', Height: '1080 mm', Length: '1995 mm', Width: '765 mm', KerbWeight: '117 kg', Wheelbase: ' 1265 mm' },
  
    { ID: 'radeon', LengthWidthHeight:  '2013 mm / 752 mm / 1085 mm', WheelBase:  '1273 mm', GroundClearance: '173 mm', KerbWeight: ' 117kg (with tool kit 90% of fuel)', FuelTankCapacity: ' 14.5 litres (reserve 2.7 litres)' },
  ]

  

  EnginePerformanceScooter = [
    { ID: 'Ntorq-Disc', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled ', EngineCapacity: '124.8 cc (3V) ', MaximumPower: '6.9 kW @ 7000 rpm ', MaxTorque: '10.5 Nm @ 5500 rpm ', Starting: 'Electric Start' },
    
    { ID: 'Ntorq-Race-Edition', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled ', EngineCapacity: '124.8 cc (3V) ', MaximumPower: '6.9 kW @ 7000 rpm ', MaxTorque: '10.5 Nm @ 5500 rpm ', Starting: 'Electric Start' },
 
    { ID: 'Ntorq-Super-Squad-Edition', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled ', EngineCapacity: '124.8 cc (3V) ', MaximumPower: '6.9 kW @ 7000 rpm ', MaxTorque: '10.5 Nm @ 5500 rpm ', Starting: 'Electric Start' },
 
    { ID: 'Ntorq-RTFI-BS6', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled ', EngineCapacity: '124.8 cc (3V) ', MaximumPower: '6.9 kW @ 7000 rpm',   MaxTorque: '10.5 Nm @ 5500 rpm ', Starting: 'Electric Start,   Race Tuned Fuel Injection BS6' },
 
    { ID: 'Ntorq-Drum', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled ', EngineCapacity: '124.8 cc (3V) ', MaximumPower: '6.9 kW @ 7000 rpm ', MaxTorque: '10.5 Nm @ 5500 rpm ', Starting: 'Electric Start' },
 
    ]
 
 
    ChasisSuspensionElectricalScooter = [
    { ID: 'Ntorq-Disc', Frame: 'High Rigidity Under Bone Tubular Type ', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers ', RearSuspension: 'Coil spring with Hydraulic Dampers ', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)'},
 
    { ID: 'Ntorq-Race-Edition', Frame: 'High Rigidity Under Bone Tubular Type ', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers ', RearSuspension: 'Coil spring with Hydraulic Dampers ', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },
 
    { ID: 'Ntorq-Super-Squad-Edition', Frame: 'High Rigidity Under Bone Tubular Type ', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers ', RearSuspension: 'Coil spring with Hydraulic Dampers ', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },
 
    { ID: 'Ntorq-RTFI-BS6', Frame: 'High Rigidity Under Bone Tubular Type ', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers ', RearSuspension: 'Coil spring with Hydraulic Dampers ', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },

    { ID: 'Ntorq-Drum', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled ', EngineCapacity: '124.8 cc (3V) ', MaximumPower: '6.9 kW @ 7000 rpm ', MaxTorque: '10.5 Nm @ 5500 rpm ', Starting: 'Electric Start' },
 
    ]
    WheelTyreBrakeScooter = [
    
    { ID: 'Ntorq-Disc', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum' },
     
    { ID: 'Ntorq-Race-Edition', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum:' },
 
    
    { ID: 'Ntorq-Super-Squad-Edition', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum:' },
 
    
    { ID: 'Ntorq-RTFI-BS6', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum:' },
    
    
    { ID: 'Ntorq-Drum', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum:' }
 
    ]
    DimensionWeightFuelTankCapacityScooter = [
 
    { ID: 'Ntorq-Disc', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164 mm', Length: '1861mm', Width: '710 mm', KerbWeight: '118kg', Wheelbase: '1285 mm' },
 
    { ID: 'Ntorq-Race-Edition', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164 mm', Length: '1861mm', Width: '710 mm', KerbWeight: '118kg', Wheelbase: '1285 mm' },
 
    { ID: 'Ntorq-Super-Squad-Edition', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164 mm', Length: '1861mm', Width: '710 mm', KerbWeight: '118kg', Wheelbase: '1285 mm' },
 
    { ID: 'Ntorq-RTFI-BS6', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164 mm', Length: '1861mm', Width: '710 mm', KerbWeight: '118kg', Wheelbase: '1285 mm' },
 
    { ID: 'Ntorq-Drum', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164 mm', Length: '1861mm', Width: '710 mm', KerbWeight: '118kg', Wheelbase: '1285 mm' }
 
 ]



}