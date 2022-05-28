import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scooter-list',
  templateUrl: './scooter-list.component.html',
  styleUrls: ['./scooter-list.component.css']
})
export class ScooterListComponent implements OnInit {

  trgItem : any;
  EP : any;
  CSE : any;
  WTB : any;
  DWFTC : any;
  BikeFeatures : any;
  AllColors : any;
  public id: any;
  
  constructor(private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) { 
    this.id = this.id;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.trgItem = this.scooters.find(item => {return item.ID === this.id});

    this.EP = this.EnginePerformance.find(item => {return item.ID === this.id});

    this.CSE = this.ChasisSuspensionElectrical.find(item => {return item.ID === this.id});

    this.WTB = this.WheelTyreBrake.find(item => {return item.ID === this.id});

    this.DWFTC = this.DimensionWeightFuelTankCapacity.find(item => {return item.ID === this.id});

    this.BikeFeatures = this.bikeFeatures.find(item => {return item.ID === this.id});

    this.AllColors = this.Colors.find((item: { ID: any; }) => {return item.ID === this.id});


    console.log(this.trgItem);
    this.changeDetectorRef.detectChanges();
  }



  bikes = [
    { ID: 'rr310', Image : 'https://tvsnepal.com/images/product/RR-3105cf8d27280ff0rr310.png', Name : 'RR 310', Price: 799900.00, Concept: 'Honed by rigorous testing and unlimited laps on the race track with key inputs and feedback by the TVS Racing Team to ensure ultimate control on the track and street. 35 years of Racing heritage-based expertise come standard with every TVS Apache RR 310. The race-derived 310cc powerplant makes upstream air being used effectively to pass through the air filter with ram effect. This innovative and unique design provides a compact engine layout resulting in mass centralization delivering best-in-class Power-to-Weight ratio.'},

    { ID: 'rtr200-4V-ABS', Image : 'https://tvsnepal.com/images/product/RTR-200-4V-ABS5f395bfeb3883RTR-200-4v.png', Name : 'RTR 200 4V ABS', Price: 355900.00, Concept: 'The TVS Apache RTR 200 4V Spearheads its class with never before seen innovation. The track focused machine boasts of Single -Channel ABS l, an advanced slipper clutch system, and pushes technological boundaries even further with the race telemetry enabled SmartXonnect - a system that provides essential race statistics and riding data.'},
    { ID: 'rtr160-4V-r-RD', Image : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh-RD60c1e30481403RTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh RD', Price: 304900.00, Concept: 'All new Apache 160 4V with new looks and Smart Xonnect feature'},

    { ID: 'rtr160-4V-r-ABS', Image : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh-with-ABS60c1e1daa04afRTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh with ABS', Price: 324900.00, Concept: 'The nature of a champion is to outdo, and the TVS Apache RTR 160 4V being the most powerful bike in its class is engineered to outpower. Derived from the INMRC Championship winning bike – the RTR 165 Prototype, the bike has a heart of a champion. Race engineered with an unmistakable presence, the bike churns out 17.63 PS of power.'},

    { ID: 'rtr160-4V-FD', Image : 'https://tvsnepal.com/images/product/RTR-160-4V5cf8d295e83ca160_4v.png', Name: 'RTR 160 4V FD', Price: 272900.00, Concept: 'The design of the RTR 1604V is refined on the racetrack. The form of the machine has a singular function, to be the quickest around the track. The bike has been sculpted to be dynamic through the corners while the sharp edges make it impose on the circuit. The chequered flag decals pay homage to our winning streak on the track.'},

    { ID: 'rtr160-4V-r-FD', Image : 'https://tvsnepal.com/images/product/RTR-160-4V-Refresh5f7ff0316aa43Rtr-160-4v-Abs-5f797a6c711b0rtr160flat.png', Name : 'RTR 160 4V Refresh FD', Price: 287900.00, Concept: 'All new Apache 160 4V with new looks and Smart Xonnect feature'},

    { ID: 'rtr160-4V-RD', Image : 'https://tvsnepal.com/images/product/RTR-160-4V-RD60c1e66c9cb7dRTR-160-4V5cf8d295e83ca160_4v.png', Name : 'RTR 200 4V RD', Price: 290900.00, Concept: 'The design of the RTR 1604V is refined on the racetrack. The form of the machine has a singular function, to be the quickest around the track. The bike has been sculpted to be dynamic through the corners while the sharp edges make it impose on the circuit. The chequered flag decals pay homage to our winning streak on the track.'},

    { ID: 'rtr200-4V-v2.0', Image : 'https://tvsnepal.com/images/product/RTR-200-4V-v2.05cf8d27f1a4e82004v.png', Name : 'RTR 200 4V v2.0',Price: 279900.00, Concept: 'The Apache RTR 200 4V Race Edition 2.0 is the first motorcycle in its class to be equipped with an advanced A-RT Slipper Clutch, a race-derived technology to complement the racing DNA of RTR 200 4V Engine. The motorcycle sports all-new dynamic racing-inspired graphics based on an aero-form theme along with a stylish and exclusively designed fly-screen for an aggressive racing stance.'},

    { ID: 'rtr180-2V', Image : 'https://tvsnepal.com/images/product/RTR-180-2V5cf8d28bdc940180_2v.png', Name: 'RTR 180 2V', Price: 324900.00, Concept: 'The Apache RTR 180 2V comes with all new graphics. It is powered by 180cc single cylinder air cooled 4 stroke engine.'},

    { ID: 'rtr160-2V', Image : 'https://tvsnepal.com/images/product/RTR-160-2V60c1d5a54627bRTR-160-2V.png', Name : 'RTR 160 2V', Price: 269900.00, Concept: 'The Apache RTR 160 2V comes with all new graphics. It is powered by 160cc single cylinder air cooled 4 stroke engine.'},

    { ID: 'stryker-125', Image : 'https://tvsnepal.com/images/product/Stryker-1255cf8d2b94fe18Stryker_125.png', Name : 'Stryker 125', Price: 196900.00, Concept: 'Stryker 125 is powered by 125cc single cylinder engine.'},

    { ID: 'tvs-max-125', Image : 'https://tvsnepal.com/images/product/Tvs-Max-1255ee9f1bbd4c52Untitled-1.png', Name : 'Tvs Max 125', Price: 241900.00, Concept: ''},

    { ID: 'radeon', Image : 'https://tvsnepal.com/images/product/Radeon5e048fac6b980Radeon.JPG', Name : 'Radeon', Price: 186900.00, Concept: 'TVS Radeon won commuter of the year award. TVS Radeon 110cc with 4 Stroke Duralife engine. It is built with super strong box Iron Chassis.'},

    { ID: 'Xl-100', Image : 'https://tvsnepal.com/images/product/Xl-1005db1676b9e6c6xl100.png', Name : 'Xl 100', Price: 115900.00, Concept: 'Xl 100 is 4 stroke single cylinder 100cc engine with max power of 4.3 BHP. It has a built-in rugged chassis to withstand demands of any terrain.'},

    { ID: 'tvs-stryker-125-r', Image : 'https://tvsnepal.com/images/product/Tvs-Stryker-125-Refresh60f1192556ecctvs-stryker-refresh.png', Name : 'Tvs Stryker 125 Refresh', Price: 208900.00, Concept: 'Stryker 125 refresh is powered by 125cc single cylinder engine.'}
  ]

  scooters = [
    { ID: 'ntorq-disc', Image: 'https://tvsnepal.com/images/product/Ntorq-Disc60c1d7c33ba12Matte-Red5e0490e0bad68Matte-red.png', Name: 'Ntorq Disc', Price: 253900.00, Concept: "Ntorq is Nepal's First Bluetooth connected scooter. It is powered by 125cc with 9.4 PS incredible power.  With Smartxonnect users can get navigation assist, last parked location and caller id. You can get Ntorq in four different variants Disc variant, drum variant ,Race Edition and Super Squad Edition."},

    { ID: 'ntorq-race-edition', Image: 'https://tvsnepal.com/images/product/Ntorq-Race-Edition60c1ff8accfba2-(1).png', Name: 'Ntorq Race Edition', Price: 269900.00,Concept: 'Ntorq Race Edition is a new variant of Ntorq with DRL ( Day Running Light), Hazard Switch and many more features including SmartXonnect.'},

    { ID: 'ntorq-super-squad-edition', Image: 'https://tvsnepal.com/images/product/Ntorq-Super-Squad-Edition60c1ff3daef442.png', Name: 'Ntorq Super Squad Edition', Price: 274900.00, Concept: "With TVS Ntorq, we aren’t done until it's EPIC. Likewise our beloved new generation or Gen Z doesn’t settle for anything lesser. They want to feel like a superhero and ride like one. And that’s why we decided to bring together the Smartness of Ntorq with the Grandness of the Marvel universe in a first of its kind collaboration.", H: 'Presenting NTORQ 125 X Marvel.', P: 'Because when the ability to do great combines with the attitude of the Ntorq rider, epic happens.'},

    { ID: 'tvs-Ntorq-RTFI-BS6', Image: 'https://tvsnepal.com/images/product/Ntorq-RTFI-BS660fe6f1d879eertfi-scooter-1-535x415.png', Name: 'Ntorq RTFI BS6', Price: 277900.00, Concept: 'TVS Ntorq RTFI has superior performance backed by TVS Racing Pedigree and is the first scooter to be equipped with Race-Tuned Fuel Injection (RT-Fi). The BS6 compliant engine delivers 9.25 hp and 10.5 Nm of torque. While the power figure has seen a slight decrease by 0.15 hp, the torque output remains the same. TVS claims a best-in-class pickup, power and acceleration with the BS6 TVS Ntorq 125 Race Edition.'},

    { ID: 'ntorq', Image: 'https://tvsnepal.com/images/product/ntorq5cf8d2ef87fa1ntorq.png', Name: 'Ntorq Drum', Price: 221900.00, Concept: "Ntorq is Nepal's First Bluetooth connected scooter. It is powered by 125cc with 9.4 PS incredible power.  With Smartxonnect users can get navigation assist, last parked location and caller id. You can get Ntorq in four different variants Disc variant, drum variant ,Race Edition and Super Squad Edition."},

    {ID: 'wego-fi', Image: 'https://tvsnepal.com/images/product/TVS-Wego-FI60c1e0dd4628fWego5e04940de1e5aWhite.png', Name: 'TVS Wego FI', Price: 215900.00, Concept: 'TVS Wego now available in BS - VI model with Fuel Injection (FI)'},

    { ID: 'dazz', Image: 'https://tvsnepal.com/images/product/Dazz5cf8d2d170e58dazz.png', Name: 'Dazz', Price: 199900.00, Concept: 'TVS Dazz DFi is a 109.65cc moped that is powered by a fuel injected motor. It is air cooled and produces a maximum of 8.7 BHP as well as 8.7 Nm of torque. The product is currently on sale in markets like Indonesia and Thailand. It is more of a cross between a scooter and a motorcycle while it uses an automatic gearbox like a traditional scooter. The 14 inch wheels are wrapped with 80 mm and 90 mm wheels on both front and rear end respectively. It weighs just 93 kg, making it more responsive than traditional machines with same sized engines.'},

    { ID: 'zest', Image: 'https://tvsnepal.com/images/product/ZEST5cf8d2c5980adzest.png', Name: 'Zest', Price: 178900.00, Concept: 'Zest scooter is powered by 110 cc single  cylinder, 4 stroke, air cooled spark ignition system.'},

    { ID: 'jupiter', Image: 'https://tvsnepal.com/images/product/Jupiter5e048efd9d834autumn-brown.png', Name: 'Jupiter Classic', Price: 211900.00, Concept: 'Jupiter is powered by 110cc 4 Stroke,Single cylinder,Air Cooled,OHC - BSIV Compliant.'},

    { ID: 'wego', Image: 'https://tvsnepal.com/images/product/Wego60c1df6216f46Wego5e04940de1e5aWhite.png', Name: 'Wego', Price: 207900.00, Concept: "Travel in style with TVS Wego's international design that blends perfectly with its modern styling. If luxury, comfort and quality are what you seek, this is for you."}
  ]

  threeWheeler = [
    { ID: 'tvs-duramax', Image: 'https://tvsnepal.com/images/product/TVS-Duramax5ee34a2b530a8Untitled-1.png', Name: 'TVS Duramax', Price: 574900.00},

    { ID: 'tvs-king-deluxe', Image: 'https://tvsnepal.com/images/product/TVS-King-Deluxe-Gs+5ed9fd166ddb3blue-king.png', Name: 'TVS King Deluxe Gs+', Price: 543900.00}
  ]

  bikeFeatures = [
    { ID: 'rr310', Image: 'https://tvsnepal.com/images/product/60c2cba8ad37eTVS-APACHE-RR310-BIKE-Red-2020-Excellence-Redefined-dashboard-scaled.jpg', Name: 'MIRC', p: 'Multi Information Race Computer', content: 'The TVS Apache RR 310 stays ahead in the race to the finish line not just on the track, but in the race to the future as well. The race machine is equipped with a smart connect enabled multi-information race computer.'},
    { ID: 'rr310', Image1: 'https://tvsnepal.com/images/product/60c2caef292d4tvs-apace-rr-310-price-in-nepal-image-01.png', Name1: 'Development', content1: 'Honed by rigorous testing and unlimited laps on the racetrack with key inputs and feedback by the TVS racing team to ensure ultimate control on the track and street. racing heritage based on experience established since 1982, comes standard with every TVS Apache RR310.'},
    { ID: 'rr310', Image2: 'https://tvsnepal.com/images/product/Concept60c1f89e13e7asura.png', Name2: 'Concept', content2: 'Inspired by the deadliest predator- the shark. the Apache RR310 is conceptualized do have an aggressive and ready to attack silhouette which is aided by are ranked high tail and ‘Mass- Forward and Minimalist Tail design. The Apache RR310 most powerful Apache till now, is based on Akula Concept which one the best concert bike off auto Expo 2016 at New Delhi.'},
    { ID: 'rr310', Image3: 'https://tvsnepal.com/images/product/Tail-Light60c1f8ffebbafTail-Light.jpg', Name3: 'Tail Light', content3: 'Snake Fangs inspired LED tail lights complete the high sporty rake tail by giving the Apache RR310 a unique visual signature in its class'},
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

  Colors = [
    {ID: 'rr310', Image1: 'https://tvsnepal.com/images/color/Phantom-Black5cf789c75621fblack-colour-310-new-black.png',  style1: 'width: 100%; height: 20px;background-color: #000;', p1: 'Phantom Black', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Racing-Red5cf789bf936d5design-bike-new-red.png', style2: 'width: 100%;height: 20px;background-color: #e8292e;', p2: 'Racing Red', borderStyle2: 'border: solid 2px #CCC;'},

    {ID: 'rtr200-4V-ABS', Image1: 'https://tvsnepal.com/images/color/RTR-200-4V-ABS5f395eb9780b0Gloss-Black-ABS.png',  style1: 'width: 100%; height: 20px;background-color: #000000;', p1: 'Gloss Black', borderStyle1: 'border: solid 2px #CCC;',Image2: 'https://tvsnepal.com/images/color/RTR-200-4V-ABS5f395e74ca98ePearl-White-ABS.png', style2: 'width: 100%;height: 20px; background-color: FFFFFF;', p2: 'Pearl White', borderStyle2: 'border: solid 2px #CCC;'},

    {ID: 'rtr160-4V-r-RD', Image1: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-RD60c1e54b792efRacing-Blue5e048d308b7aaBlack-Tank.png',  style1: 'width: 100%; height: 20px; background-color: #000000;', p1: 'Black', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-RD60c1e4ee154dcRacing-Blue5e048d3d4d8b2Blue-Tank.png', style2: 'border: solid 2px #CCC;', p2: 'Blue', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-RD60c1e4aad0062Racing-Red5e048d4a0817dRed-Tank.png', style3: 'width: 100%;height: 20px;background-color: #eb4034;', p3: 'Red', borderStyle3: 'border: solid 2px #CCC;'},

    {ID: 'rtr160-4V-r-ABS', Image1: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-RD60c1e54b792efRacing-Blue5e048d308b7aaBlack-Tank.png',  style1: 'width: 100%;height: 20px;background-color: #000000;', p1: 'Black', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-RD60c1e4ee154dcRacing-Blue5e048d3d4d8b2Blue-Tank.png', style2: 'border: solid 2px #CCC;', p2: 'Blue', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-RD60c1e4aad0062Racing-Red5e048d4a0817dRed-Tank.png', style3: 'width: 100%;height: 20px;background-color: #eb4034;', p3: 'Red', borderStyle3: 'border: solid 2px #CCC;'},

    {ID: 'rtr160-4V-FD', Image1: 'https://tvsnepal.com/images/color/Racing-Red5e048d4a0817dRed-Tank.png',  style1: 'width: 100%;height: 20px;background-color: #DD2314;', p1: 'Racing Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Racing-Blue5e048d308b7aaBlack-Tank.png', style2: 'width: 100%;height: 20px;background-color: #252525;', p2: 'Racing Black', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Racing-Blue5e048d3d4d8b2Blue-Tank.png', style3: 'width: 100%;height: 20px;background-color: #4B66AC;', p3: 'Racing Blue', borderStyle3: 'border: solid 2px #CCC;' },

    {ID: 'rtr160-4V-r-FD', Image1: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-FD60c1e5636430eRacing-Blue5e048d308b7aaBlack-Tank.png',  style1: 'width: 100%;height: 20px;background-color: #000000;', p1: 'Black', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-FD60c1e52a30517Racing-Blue5e048d3d4d8b2Blue-Tank.png', style2: 'width: 100%;height: 20px;background-color: #345feb;', p2: 'Blue', Image3: 'https://tvsnepal.com/images/color/RTR-160-4V-Refresh-FD60c1e4cd29f1eRacing-Red5e048d4a0817dRed-Tank.png', borderStyle2: 'border: solid 2px #CCC;', style3: 'width: 100%;height: 20px;background-color: #eb4034;', p3: 'Red', borderStyle3: 'border: solid 2px #CCC;'},

    {ID: 'rtr160-4V-RD', Image1: 'https://tvsnepal.com/images/color/RTR-160-4V-RD60c1e71b64e8bRed-4v.png',  style1: 'width: 100%;height: 20px;background-color: #eb4034;', p1: 'Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/RTR-160-4V-RD60c1e70aaa261black-4v.png', style2: 'width: 100%;height: 20px;background-color: #000000;', p2: 'Black', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/RTR-160-4V-RD60c1e6fa5816ablue-4v.png', style3: 'width: 100%;height: 20px;background-color: #345feb;', p3: 'Blue', borderStyle3: 'border: solid 2px #CCC;'},

    {ID: 'rtr200-4V-v2.0', Image1: 'https://tvsnepal.com/images/color/Black5e048bd702a45black.png',  style1: 'width: 100%;height: 20px;background-color: #000;', p1: 'Black', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/White5e048be6c7d9cwhite.png', style2: 'width: 100%;height: 20px;background-color: #fff;', p2: 'White', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Red5e048bf2204bfred.png', style3: 'width: 100%;height: 20px;background-color: #FF0000;', p3: 'Red', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/Gray5e048bfeae5c5gray.png', style4: 'width: 100%;height: 20px;background-color: #808080;', p4: 'Gray', borderStyle4: 'border: solid 2px #CCC;',},

    {ID: 'rtr180-2V', Image1: 'https://tvsnepal.com/images/color/Blue5e048dc6489fbblue-new.png',  style1: 'width: 100%;height: 20px;background-color: #0000FF;', p1: 'Blue', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Black5e048dbb7b8bfblack-new.png', style2: 'width: 100%;height: 20px;background-color: #000;', p2: 'Black', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/White5e048daccb6d8white-new.png', style3: 'width: 100%;height: 20px;background-color: #fff;', p3: 'White', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/Gray5e048d9ba6c10Grey-new.png', style4: 'width: 100%;height: 20px;background-color: #808080;', p4: 'Grey', borderStyle4: 'border: solid 2px #CCC;'},

    {ID: 'rtr160-2V', Image1: 'https://tvsnepal.com/images/color/Matte-Red5e048e237388d160-matte-red-new.png',  style1: 'width: 100%;height: 20px;background-color: #FF0000;', p1: 'Matte Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Grey5e048e45dd038t-Grey.png', style2: 'width: 100%;height: 20px;background-color: #808080;', p2: 'Grey', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Gloss-Black5e048e552d93fgloss-black-(1).png', style3: 'width: 100%;height: 20px;background-color: #000;', p3: 'Gloss Black', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/Matte-Blue5e048e60a6f35160-matte-blue-new.png', style4: 'width: 100%;height: 20px;background-color: #0000FF;', p4: 'Matte Blue', borderStyle4: 'border: solid 2px #CCC;', Image5: 'https://tvsnepal.com/images/color/Pearl-White5e048e1814b3aPearl-White.png', style5: 'width: 100%;height: 20px;background-color: #fff;', p5: 'Pearl White', borderStyle5: 'border: solid 2px #CCC;'},

    {ID: 'radeon', Image1: 'https://tvsnepal.com/images/color/Radeon5e04905d9ce31Radeon.JPG',  style1: 'width: 100%;height: 20px;background-color: FFFFFF;', p1: 'Pearl White', borderStyle1: 'border: solid 2px #CCC;'},

    { ID: 'ntorq-disc', Image1: 'https://tvsnepal.com/images/color/Ntorq-Disc60c1de043d074Matte-Red5e0490e0bad68Matte-red-(1).png',  style1: 'width: 100%;height: 20px;background-color: #ff0000;', p1: 'Matte Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Yellow60c1dede1eaa4Yellow5e04910a2fea704-TVS-Entorq0006-final-removebg-preview.png', style2: 'width: 100%;height: 20px;background-color: #FFFF00;', p2: 'Yellow', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Ntorq-Disc60c1dd867d0d5Mettalic-Red5e0490ff3eee2Metallic-Red.png', style3: 'width: 100%;height: 20px;background-color: #ff0000;', p3: 'Mettalic Red', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/Ntorq-Disc60c1dd5c4c6baBlue5e0490f560c50Blue.png', style4: 'width: 100%;height: 20px;background-color:  #0000FF;', p4: 'Blue', borderStyle4: 'border: solid 2px #CCC;', Image5: 'https://tvsnepal.com/images/color/Ntorq-Disc60c1dcf17e5e3Grey5e0490eb39da0Mettalic-black.png', style5: 'width: 100%;height: 20px;background-color: #808080;', p5: 'Grey', borderStyle5: 'border: solid 2px #CCC;', },

    { ID: 'ntorq-race-edition', Image1: 'https://tvsnepal.com/images/color/Ntorq-Race-Edition60c1e8be895bbNtorq-Race-Edition5e1b0fdfd160aNtorq-Race-Edition.png',  style1: 'width: 100%;height: 20px;background-color: #ff0000;', p1: 'Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Race-Edition-Yellow60c1e8ff05cc0TVS-NTorq-Yellow-Featured-Image-1110x577-removebg-preview.png', style2: 'width: 100%;height: 20px;background-color: #FFFF00;', p2: 'Race Edition Yellow', borderStyle2: 'border: solid 2px #CCC;',},

    { ID: 'ntorq-super-squad-edition', Image1: 'https://tvsnepal.com/images/color/Ntorq-Super-Squad-Edition60c1ee837975dNtorq-Super-Squad-Edition-Invincible-Red6029efa5a1292invincible-red.png',  style1: 'width: 100%;height: 20px;background-color: #ff0000;', p1: 'Invincible Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Ntorq-Super-Squad-Edition60c1ee1c95f427.png', style2: 'width: 100%;height: 20px;background-color: #000000;', p2: 'Stealth Black', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Combat-Blue-60c1eda767bbfTVS-Ntorq-125-Scooter-Combat-Blue-Captain-America-Nepal-Price-Image1-removebg-preview.png', style3: 'width: 100%;height: 20px;background-color: #0000FF;', p3: 'Combat Blue', borderStyle3: 'border: solid 2px #CCC;',},

    { ID: 'tvs-Ntorq-RTFI-BS6', Image1: 'https://tvsnepal.com/images/color/Ntorq-RTFI-BS660fe747bf25c5Race-Edition-Yellow60c1e8ff05cc0TVS-NTorq-Yellow-Featured-Image-1110x577-removebg-preview.png',  style1: 'width: 100%;height: 20px;background-color: #FFFF00;', p1: 'Yellow', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Ntorq-RTFI-BS660fe742f71c8bNtorq-Race-Edition60c1e8be895bbNtorq-Race-Edition5e1b0fdfd160aNtorq-Race-Edition.png', style2: 'width: 100%;height: 20px;background-color: #ff0000;', p2: 'RED', borderStyle2: 'border: solid 2px #CCC;',},

    { ID: 'ntorq', Image1: 'https://tvsnepal.com/images/color/Yellow60c1f122761b7Yellow5e04910a2fea704-TVS-Entorq0006-final-removebg-preview.png',  style1: 'width: 100%;height: 20px;background-color: #FFFF00;', p1: 'Yellow', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Mettalic-Red5e0490ff3eee2Metallic-Red.png', style2: 'width: 100%;height: 20px;background-color: #ff0000;', p2: 'Mettalic Red', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Blue5e0490f560c50Blue.png', style3: 'width: 100%;height: 20px;background-color: #0000FF;', p3: 'Blue', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/Grey5e0490eb39da0Mettalic-black.png', style4: 'width: 100%;height: 20px;background-color: #808080;', p4: 'Grey', borderStyle4: 'border: solid 2px #CCC;', Image5: 'https://tvsnepal.com/images/color/Matte-Red5e0490e0bad68Matte-red.png', style5: 'width: 100%;height: 20px;background-color: #ff0000;', p5: 'Matte Red', borderStyle5: 'border: solid 2px #CCC;', Image6: 'https://tvsnepal.com/images/color/White5e049072b49ceWhite.png', style6: 'width: 100%;height: 20px;background-color: #fff;', p6: 'White', borderStyle6: 'border: solid 2px #CCC;' },

    {ID: 'wego-fi', Image1: 'https://tvsnepal.com/images/color/60c1e00452244Wego5e0494967f13ared.png',  style1: 'width: 100%;height: 20px;background-color: #F71612;', p1: 'Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/TVS-Wego-FI60c1dfea0ebb5Wego5e04944c18c81Blue.png', style2: '', p2: 'Blue', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/TVS-Wego-FI60c1dfcbe021cWego5e0492db981ddWego-black-gre.png', style3: 'width: 100%;height: 20px;background-color: #000000;', p3: 'Black', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/TVS-Wego-FI60c1dfaf8b930Wego5e04940de1e5aWhite.png', style4: 'width: 100%;height: 20px;background-color: #3a3838;', p4: 'Grey', borderStyle4: 'border: solid 2px #CCC;'},

    { ID: 'dazz' },

    { ID: 'zest' },

    { ID: 'jupiter', Image1: 'https://tvsnepal.com/images/color/Sunlit-Ivory5e048ec5a7d59sunlit-ivory.png',  style1: 'width: 100%;height: 20px;background-color: #F6E8CA;', p1: 'Sunlit Ivory', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Autumn-Brown5e048eeda5d8bautumn-brown.png', style2: 'width: 100%;height: 20px;background-color:  #98482b;', p2: 'Autumn Brown', borderStyle2: 'border: solid 2px #CCC;', },

    { ID: 'wego', Image1: 'https://tvsnepal.com/images/color/Wego5e0494967f13ared.png',  style1: 'width: 100%;height: 20px;background-color: #ff0000;', p1: 'Red', borderStyle1: 'border: solid 2px #CCC;', Image2: 'https://tvsnepal.com/images/color/Wego5e04944c18c81Blue.png', style2: 'width: 100%;height: 20px;background-color: #2d8cf9;', p2: 'Blue', borderStyle2: 'border: solid 2px #CCC;', Image3: 'https://tvsnepal.com/images/color/Wego5e0493f5ada6bWhite.png', style3: 'width: 100%;height: 20px;background-color: #3a3838;', p3: 'Grey', borderStyle3: 'border: solid 2px #CCC;', Image4: 'https://tvsnepal.com/images/color/Wego5e0492db981ddWego-black-gre.png', style4: 'width: 100%;height: 20px;background-color: #000000;', p4: 'Black', borderStyle4: 'border: solid 2px #CCC;',}
  ]

  EnginePerformance = [
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

    { ChassisID: '12', Type: 'Single cradle tubular frame', SuspensionFront: 'Telescopic hydraulic type', SuspensionRear: ' Toggle link with hydraulic damper' },

    { ID: 'radeon', Type: ' Single cylinder, 4- stroke, Air-Cooled', Displacement: '124.5 cc', MaxNetPower: '8.0 (11 bhp) @ 8000 rpm', MaxNetTorque: '10.8 Nm @ 5500 rpm', Starting: 'Electric', Ignition: 'DC-Digital TCI', FuelSystem: 'Carburetor, UCAL UCD 25', NumberOfSpeedGears: '4 Speed' },

    { ID: 'Xl-100', Type: 'SI, 4- stroke, Oil-Cooled', EngineCapacity: '159.7 cm3', MaximumPower: '11.42 kW @ 8400 rpm (15.53 PS @ 8400 rpm)', MaxTorque: ' 13.9 Nm @ 7000 rpm', ValvePerCylinder: '2 Valves', Starting: 'Electric Start', PowerWeightRatio: '0.0822 kW/kg', GearBox: '5 speed gear box' },

    { ID: 'tvs-stryker-125-r', Type: '4 Stroke, Fuel Injection, Air Cooled', Displacement: '109.7 Cc', Efisystem: 'Etfi (Eco-Thrust Fuel Injection)', MaxPower: '4,03 Kw 7350 Rpm', MaxTorque: '8.7 Nm 4500 Rpm', BorexStroke:  '53.5 Mmx 48,8 Mm', CompressionRatio: '10,0:1', Transmission: '4 Speed Constant Mesh', Clutch: 'Wet, Multiple-Disc'},
    
    { ID: 'ntorq-disc', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled', EngineCapacity: '124.8 cc (3V)', MaxPower: '6.9 kW @ 7000 rpm', MaxTorque: '10.5 Nm @ 5500 rpm', Starting: 'Electric Start'},
    
    { ID: 'ntorq-race-edition', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled', EngineCapacity: '124.8 cc (3V)', MaxPower: '6.9 kW @ 7000 rpm', MaxTorque: '10.5 Nm @ 5500 rpm', Starting: 'Electric Start'},
    
    { ID: 'ntorq-super-squad-edition', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled', EngineCapacity: '124.8 cc (3V)', MaxPower: '6.9 kW @ 7000 rpm', MaxTorque: '10.5 Nm @ 5500 rpm', Starting: 'Electric Start'},
    
    { ID: 'tvs-Ntorq-RTFI-BS6', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled', EngineCapacity: '124.8 cc (3V)', MaxPower: '6.9 kW @ 7000 rpm', MaxTorque: '10.5 Nm @ 5500 rpm', Starting: 'Electric Start'},
    
    { ID: 'ntorq', Type: 'Single Cylinder, 4 - Stroke, SI, Air Cooled', EngineCapacity: '124.8 cc (3V)', MaxPower: '6.9 kW @ 7000 rpm', MaxTorque: '10.5 Nm @ 5500 rpm', Starting: 'Electric Start'},
      
  ]

  ChasisSuspensionElectrical = [
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
    
    { ID: 'ntorq-disc', Frame: 'High Rigidity Under Bone Tubular Type', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers', RearSuspension: 'Coil spring with Hydraulic Dampers', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },
    
    { ID: 'ntorq-race-edition', Frame: 'High Rigidity Under Bone Tubular Type', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers', RearSuspension: 'Coil spring with Hydraulic Dampers', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },
    
    { ID: 'ntorq-super-squad-edition', Frame: 'High Rigidity Under Bone Tubular Type', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers', RearSuspension: 'Coil spring with Hydraulic Dampers', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },
    
    { ID: 'tvs-Ntorq-RTFI-BS6', Frame: 'High Rigidity Under Bone Tubular Type', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers', RearSuspension: 'Coil spring with Hydraulic Dampers', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },
    
    { ID: 'ntorq', Frame: 'High Rigidity Under Bone Tubular Type', FrontSuspension: 'Telescopic Suspension with Hydraulic Dampers', RearSuspension: 'Coil spring with Hydraulic Dampers', Battery: '12V, 4Ah MF', Headlamp: '35/35W HS1 LED lamp (for Race Edition)' },

  ]


  WheelTyreBrake = [
    { ID: 'rr310', FrontTyre: '110/70 R17 Tubeless - Michelin Pilot Street', RearTyre: '150/60 R17 M/C 62P Tubeless - Michelin Pilot Street', BrakeFluid: 'DOT 4', Front: 'Disc 300mm Petal type with ABS', Rear: ' Disc 240mm Petal type with ABS'},
    
    { ID: 'rtr200-4V-ABS', FrontTyre: '90/90-17 49P Tubeless', RearTyre: 'TVS Eurogrip 130/70 R17 M/C 62P Tubeless (Radial)', ABS: ' Single Channel Super-Moto ABS',  BrakeFluid: 'DOT 3 / DOT 4', Front: '270mm dia Petal Disc', Rear: '240mm dia Petal Disc', WheelRim:'Front: 1.85 x 17 (Alloy) | Rear: 3.50 x 17 (Alloy)' },

    { ID: 'rtr160-4V-r-RD', FrontRim: '1.85x17', RearRimDrum: '- 2.15x17 | Disc - 3.5x17', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: ' 110/80-17 57P Tubeless 130/70-17 M/c 62P Tubeless', ABS: ' Single Channel Super-Moto ', BrakeFluid: ' 200mm dia Petal Disc DOT 3 / DOT 4', Front: ' 270mm dia Petal Disc', Rear: ' 130mm dia Drum /'},

    { ID: 'rtr160-4V-r-ABS', FrontTyre: '90/90-17 49p Tubeless', RearTire: '110/80-17 57p Tubeless', BrakeFluid: '200mm dia petal Disc DOT 3 / DOT 4', Front: ':270mm dia petal Disc', Rear: ': 130mm dia Drum'},

    { ID: 'rtr160-4V-FD', FrontRim: '1.85x17', RearRimDrum: '- 2.15x17 | Disc - 3.5x17', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: ' 110/80-17 57P Tubeless 130/70-17 M/c 62P Tubeless', BrakeFluid: '200mm dia Petal Disc DOT 3 / DOT 4', Front: ' 270mm dia Petal Disc', Rear: ' 130mm dia Drum /'},

    { ID: 'rtr160-4V-r-FD', FrontTyre: '90/90-17 49p Tubeless ', RearTyre: '110/80-17 57p Tubeless', BrakeFluid: '200mm dia petal Disc', Front: '270mm dia petal Disc ', Rear: '130mm dia Drum'}, 
 
    { ID: 'rtr160-4V-RD', FrontTyre: '90/90-17 49P Tubeless', RearTyre: '110/80-17 Tubeless',  BrakeFluid: 'DOT 3 / DOT 4',  Front: '270mm dia Petal Disc',Rear: '240mm dia Petal Disc', WheelRim: ' Front: 1.85 x 17 (Alloy) | Rear: 3.50 x 17 (Alloy) ' },

    { ID: 'rtr200-4V-v2.0', FrontTyre: ' 90/90-17 49p Tubeless', RearTyre: ' 110/80-17 57p Tubeless', BrakeFluid: ' 200mm dia petal Disc DOT3/DOT4',  Front: ' 270mm dia petal Disc',Rear: ' 200mm dia Drum' },

    { ID: 'rtr180-2V', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: '110/80-17 57P Tubeless ',  BrakeFluid: ' DOT 3 / DOT 4',  Front: '270mm dia Petal Disc',Rear: 'Drum - 130mm dia Drum Disc - 200mm dia Petal Disc' },

    { ID: 'rtr160-2V', FrontTyre: ' 90/90-17 49P Tubeless', RearTyre: '110/80-17 57P Tubeless ',  BrakeFluid: ' DOT 3 / DOT 4',  Front: '270mm dia Petal Disc',Rear: 'Drum - 130mm dia Drum Disc - 200mm dia Petal Disc' },

    { ID: 'stryker-125', FrontTyre: ' 2.75 x 17" Tubeless', RearTyre: '90/90 -17, Tubeless',  Front: '240 mm Disc Brake',Rear: '130mm Drum Brake'},

    { ID: 'tvs-max-125', FrontTyre: 'Drum 2.75*17 (Tube type) Disc 2.75*17 tubeless', RearTyre: 'Drum 90/90*17 (Tube type)Disc 90/90*17 tubeless', WheelSize: 'Front : 17 inch, Rear :-17 inch', FrontBrakes: 'Hand operated, 240mm dia.disc', RearBrakes: 'Foot operated, internally expanding 130mm dia.drum' },

    { ID: 'radeon', FrontBrakeBase: 'Drum /130mm', FrontBrakeCoty: ' Drum/ 240 Mm', RearBrakes: ' Drum /130mm(Sync)', FrontTyre: 'Tubeless-2.75x 18', RearTyre: 'Tubeless - 3.00 X 18', Length: '2025 Mm', Width: '705mm', Height: '1080mm', WheelBase: '1265mm',GroundClearance: ' 180mm', Kerbweight: '116kg' },
    
    { ID: 'ntorq-disc', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum '},
    
    { ID: 'ntorq-race-edition', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum '},
   
    { ID: 'ntorq-super-squad-edition', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum '},
    
    { ID: 'tvs-Ntorq-RTFI-BS6', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum '},
   
    { ID: 'ntorq', FrontTyre: 'Tubeless 100/80-12', RearTyre: 'Tubeless 100/80-12', BrakeFluid: 'DOT 3 / DOT 4', Front: 'Disc 220mm with SBT / Drum 130mm with SBT', Rear: '130mm dia Drum '},
  ]

  DimensionWeightFuelTankCapacity = [
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
   
    { ID: 'ntorq-disc', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164  mm', Length: '1861 mm', Width: '710  mm', KerbWeight: '118 kg', Wheelbase: '1285 mm' },
    
    { ID: 'ntorq-race-edition', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164  mm', Length: '1861 mm', Width: '710  mm', KerbWeight: '118 kg', Wheelbase: '1285 mm' },
    
    { ID: 'ntorq-super-squad-edition', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164  mm', Length: '1861 mm', Width: '710  mm', KerbWeight: '118 kg', Wheelbase: '1285 mm' },
    
    { ID: 'tvs-Ntorq-RTFI-BS6', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164  mm', Length: '1861 mm', Width: '710  mm', KerbWeight: '118 kg', Wheelbase: '1285 mm' },
    
    { ID: 'ntorq', FuelTankCapacity: '5.8 L', GroundClearance: '180 mm', Height: '1164  mm', Length: '1861 mm', Width: '710  mm', KerbWeight: '118 kg', Wheelbase: '1285 mm' },

  ]

  scooterFeatures = [
    {Id: 'ntorq-disc', Image: 'https://tvsnepal.com/images/product/Style60c1d91f5a31514GamingConsoleinspiredspeedometere1d133f383a0146d51121c156b553081.jpg', Name: 'Style', Li1: 'Stealth Aircraft Inspired Styling', Li2: "Signature 'T' Rear Lamp", Li3: 'Sporty Stubby Muffler', Li4: 'Large Wheels 12, Diamond Cut Alloys', Li5: 'Bold Chunky Tyres', Li6: 'Batwing Styled Daytime Running Lights', Li7: 'Sporty Split Grab Rail', Li8: 'Afterburner Style Rear Vents', Li9: 'Gaming Console Inspired Speedometer',},

    {Id: 'ntorq-disc', Image: 'https://tvsnepal.com/images/product/Performance60c1d94857a9113Valve125CVTiRevvengine.jpg', Name: 'Performance', Li1: '3-Valve 125 CVTi Engine', Li2: 'TVS Racing Inspired Performance', Li3: 'Power 9.25 bhp', Li4: 'In-Built Lap Timer', Li5: 'In-Built 0 to 60 Speedometer', Li6: 'Three Trip Meter', Li7: 'Power Eco-Mode Indicator Led', Li8: 'Top Speed - 95 km/h', Li9: '0 to 60 in 9 Sec'},

    {Id: 'ntorq-disc', Image: 'https://tvsnepal.com/images/product/Technology60c1d96d07e42featuretechnology057a3b987310021237d50a3cd3875a4d.jpg', Name: 'Smartxonnect', Li1: 'Bluetooth Connected Speedometer', Li2: 'Full Digital Console With 60 Features', Li3: 'Multi-Mode Display - Street, Sport, Ride Stats', Li4: 'Ride Stats Best Lap and Last Lap', Li5: 'Personalized Welcome Messages', Li6: 'Incoming Call Alert ', Li7: 'Incoming SMS Alert, Missed Call Alert, Navigation Assist, Engine Temperature Indicator, Phone Signal Strength Display'},

    {Id: 'ntorq-disc', Image: 'https://tvsnepal.com/images/product/Safety60c1da7317c911220mmRotopetaldiscbrakes6eee572e443c0c513b54d45001458694.jpg', Name: 'Safety', Li1: '220 mm Roto Petal Disc Brakes', Li2: 'Parking Brake'}

  ]
  
  scooterFeatures1 = [
    {Id: 'ntorq-race-edition', Image: 'https://tvsnepal.com/images/product/Race-Edition60c1e6ea66527re-feature-1.jpg', Name: 'Race Edition', Li1: '3 Tone Color Combo', Li2: 'Race Inspired Decals', Li3: 'Signature Led Headlamps'},

    {Id: 'ntorq-race-edition', Image: 'https://tvsnepal.com/images/product/Style60c1e705947fe14GamingConsoleinspiredspeedometere1d133f383a0146d51121c156b553081.jpg', Name: 'Style', Li1: 'Stealth Aircraft Inspired Styling', Li2: "Signature 'T' Rear Lamp", Li3: 'Sporty Stubby Muffler', Li4: 'Large Wheels 12, Diamond Cut Alloys', Li5: 'Bold Chunky Tyres', Li6: 'Batwing Styled Daytime Running Lights', Li7: 'Sporty Split Grab Rail', Li8: 'Afterburner Style Rear Vents', Li9: 'Gaming Console Inspired Speedometer'},
    
    {Id: 'ntorq-race-edition', Image: 'https://tvsnepal.com/images/product/Performance60c1e7270c97a13Valve125CVTiRevvengine.jpg', Name: 'Performance', Li1: '3-Valve 125 CVTi Engine', Li2: 'TVS Racing Inspired Performance', Li3: 'Power 9.25 bhp', Li4: 'In-Built Lap Timer', Li5: 'In-Built 0 to 60 Speedometer', Li6: 'Three Trip Meter', Li7: 'Power Eco-Mode Indicator Led', Li8: 'Top Speed - 95 km/h', Li9: '0 to 60 in 9 Sec'},

    {Id: 'ntorq-race-edition', Image: 'https://tvsnepal.com/images/product/Smartxonnect60c1e753de00dfeaturetechnology057a3b987310021237d50a3cd3875a4d.jpg', Name: 'Smartxonnect', Li1: 'Bluetooth Connected Speedometer', Li2: 'Full Digital Console With 60 Features', Li3: 'Multi-Mode Display - Street, Sport, Ride Stats', Li4: 'Ride Stats Best Lap and Last Lap', Li5: 'Personalized Welcome Messages', Li6: 'Incoming Call Alert ', Li7: 'Incoming SMS Alert, Missed Call Alert, Navigation Assist, Engine Temperature Indicator, Phone Signal Strength Display'},
  ]
  
  scooterFeatures2 = [
    {Id: 'ntorq-super-squad-edition', Image: 'https://tvsnepal.com/images/product/Style60c1ef47dbc66features-01.png', Name: 'Style',  Li1: 'Stealth Aircraft Inspired Styling', Li2: "Signature 'T' Rear Lamp", Li3: 'Sporty Stubby Muffler', Li4: 'Large Wheels 12, Diamond Cut Alloys', Li5: 'Bold Chunky Tyres', Li6: 'Batwing Styled Daytime Running Lights', Li7: 'Sporty Split Grab Rail', Li8: 'Afterburner Style Rear Vents', Li9: 'Gaming Console Inspired Speedometer'},

    {Id: 'ntorq-super-squad-edition', Image: 'https://tvsnepal.com/images/product/Performance60c1ef6e981ca13Valve125CVTiRevvengine.jpg', Name: 'Performance',  Li1: '3-Valve 125 CVTi Engine', Li2: 'TVS Racing Inspired Performance', Li3: 'Power 9.25 bhp', Li4: 'In-Built Lap Timer', Li5: 'In-Built 0 to 60 Speedometer', Li6: 'Three Trip Meter', Li7: 'Power Eco-Mode Indicator Led', Li8: 'Top Speed - 95 km/h', Li9: '0 to 60 in 9 Sec'},

    {Id: 'ntorq-super-squad-edition', Image: 'https://tvsnepal.com/images/product/Smartxonnect60c1efa05568afeatures-03.png', Name: 'Smartxonnect',Li1: 'Bluetooth Connected Speedometer', Li2: 'Full Digital Console With 60 Features', Li3: 'Multi-Mode Display - Street, Sport, Ride Stats', Li4: 'Ride Stats Best Lap and Last Lap', Li5: 'Personalized Welcome Messages', Li6: 'Incoming Call Alert ', Li7: 'Incoming SMS Alert, Missed Call Alert, Navigation Assist, Engine Temperature Indicator, Phone Signal Strength Display'},

    {Id: 'ntorq-super-squad-edition', Image: 'https://tvsnepal.com/images/product/Safety60c1eff4c736dfeatures-02.png', Name: 'Safety',  Li1: '220 mm Roto Petal Disc Brakes', Li2: 'Parking Brake'}
  ]
  
  scooterFeatures3 = [
    {Id: 'tvs-Ntorq-RTFI-BS6',  Image: 'https://tvsnepal.com/images/product/Race-Edition60c1e6ea66527re-feature-1.jpg', Name: 'Race Edition', Li1: '3 Tone Color Combo', Li2: 'Race Inspired Decals', Li3: 'Signature Led Headlamps'},

    {Id: 'tvs-Ntorq-RTFI-BS6', Image: 'https://tvsnepal.com/images/product/Style60c1ef47dbc66features-01.png', Name: 'Style',  Li1: 'Stealth Aircraft Inspired Styling', Li2: "Signature 'T' Rear Lamp", Li3: 'Sporty Stubby Muffler', Li4: 'Large Wheels 12, Diamond Cut Alloys', Li5: 'Bold Chunky Tyres', Li6: 'Batwing Styled Daytime Running Lights', Li7: 'Sporty Split Grab Rail', Li8: 'Afterburner Style Rear Vents', Li9: 'Gaming Console Inspired Speedometer'},

    {Id: 'tvs-Ntorq-RTFI-BS6', Image: 'https://tvsnepal.com/images/product/Performance60c1ef6e981ca13Valve125CVTiRevvengine.jpg', Name: 'Performance',  Li1: '3-Valve 125 CVTi Engine', Li2: 'TVS Racing Inspired Performance', Li3: 'Power 9.25 bhp', Li4: 'In-Built Lap Timer', Li5: 'In-Built 0 to 60 Speedometer', Li6: 'Three Trip Meter', Li7: 'Power Eco-Mode Indicator Led', Li8: 'Top Speed - 95 km/h', Li9: '0 to 60 in 9 Sec'},

    {Id: 'tvs-Ntorq-RTFI-BS6', Image: 'https://tvsnepal.com/images/product/Smartxonnect60c1efa05568afeatures-03.png', Name: 'Smartxonnect',Li1: 'Bluetooth Connected Speedometer', Li2: 'Full Digital Console With 60 Features', Li3: 'Multi-Mode Display - Street, Sport, Ride Stats', Li4: 'Ride Stats Best Lap and Last Lap', Li5: 'Personalized Welcome Messages', Li6: 'Incoming Call Alert ', Li7: 'Incoming SMS Alert, Missed Call Alert, Navigation Assist, Engine Temperature Indicator, Phone Signal Strength Display'}
    
  ]
  
  scooterFeatures4 = [
    {Id: 'ntorq', Image: 'https://tvsnepal.com/images/product/Style60c1ef47dbc66features-01.png', Name: 'Style',  Li1: 'Stealth Aircraft Inspired Styling', Li2: "Signature 'T' Rear Lamp", Li3: 'Sporty Stubby Muffler', Li4: 'Large Wheels 12, Diamond Cut Alloys', Li5: 'Bold Chunky Tyres', Li6: 'Batwing Styled Daytime Running Lights', Li7: 'Sporty Split Grab Rail', Li8: 'Afterburner Style Rear Vents', Li9: 'Gaming Console Inspired Speedometer'},

    {Id: 'ntorq', Image: 'https://tvsnepal.com/images/product/Performance60c1ef6e981ca13Valve125CVTiRevvengine.jpg', Name: 'Performance',  Li1: '3-Valve 125 CVTi Engine', Li2: 'TVS Racing Inspired Performance', Li3: 'Power 9.25 bhp', Li4: 'In-Built Lap Timer', Li5: 'In-Built 0 to 60 Speedometer', Li6: 'Three Trip Meter', Li7: 'Power Eco-Mode Indicator Led', Li8: 'Top Speed - 95 km/h', Li9: '0 to 60 in 9 Sec'},

    {Id: 'ntorq', Image: 'https://tvsnepal.com/images/product/Smartxonnect60c1efa05568afeatures-03.png', Name: 'Smartxonnect',Li1: 'Bluetooth Connected Speedometer', Li2: 'Full Digital Console With 60 Features', Li3: 'Multi-Mode Display - Street, Sport, Ride Stats', Li4: 'Ride Stats Best Lap and Last Lap', Li5: 'Personalized Welcome Messages', Li6: 'Incoming Call Alert ', Li7: 'Incoming SMS Alert, Missed Call Alert, Navigation Assist, Engine Temperature Indicator, Phone Signal Strength Display'},

    {Id: 'ntorq', Image: 'https://tvsnepal.com/images/product/Convenience60c1d4326814d522ltsunderseatstoragefd38b22e2ea67e0514207a32c71bcc26.jpg', Name: 'Convenience', Li1: 'Engine Kill Switch', Li2: 'Pass By Switch', Li3: 'Trip F for Fuel on Reserve', Li4: '20lts Under Seat Storage', Li5: 'USB Charger'},
  ]
  
  scooterFeatures7 = [
    {Id: 'zest', Image: 'https://tvsnepal.com/images/product/Style60c1d8ba46cb4Silver-Oak-Interior-Panels.png', Name: 'Style', Li1: 'Silver Oak Interior Panels'},

    {Id: 'zest', Image: 'https://tvsnepal.com/images/product/Engine60c1d8dcadf81Eco-Thrust-Engine.png', Name: 'Engine', Li1: '', Li2: 'The Advanced Ecothrust Engine with multicurve ignition system, throttle force reduction and improved pick-up gives you longer lasting, trouble free and comfortable rides.'},

    {Id: 'zest', Image: 'https://tvsnepal.com/images/product/Comfort60c1d90303649Largest-Storage---19-Litres-Of-Under-Seat-Storage.png', Name: 'Comfort', Li1: '19 litres storage capacity'},

    {Id: 'zest', Image: 'https://tvsnepal.com/images/product/Safety60c1d93606639Anti-Skid-Tubeless-Tyres.png', Name: 'Safety', Li1: 'Antiskid Tubeless Tyres'},
  ]
  
  scooterFeatures8 = [
    {Id: 'jupiter', Image: 'https://tvsnepal.com/images/product/Comfort60c1d7f1cea50TVS-Jupiter-ClassicLargest--Leg-Space-375-mm.png', Name: 'Comfort', Li1: 'The meticulously planned, luxuriously tailored components afford both rider & pillion the ultimate in personal space. TVS Jupiter has the largest leg space (375mm) amongst all scooters. Ride comfortably and store more.'},

    {Id: 'jupiter', Image: 'https://tvsnepal.com/images/product/Convenience60c1d82040127TVS-Jupiter-Classic_Large-Under-seat-storage.png', Name: 'Convenience', Li1: 'With effectively usable storage space of 21 litres, it allows for multiple configurations and maximum under-storage capacity, there’s no denying its storage abilities. It keeps your luggage conveniently & safely and a full face helmet also.'},

    {Id: 'jupiter', Image: 'https://tvsnepal.com/images/product/Safety60c1d8378c4fbTVS-Jupiter-Classic_Metal-Body.png', Name: 'Safety', Li1: "Good bones provide structure, strength & flexibility. The vehicle's stiff chassis provides a firm foundation for nimble handling and an ultra-high-strength sheet metal body eliminates any chance of a tension."},

  ]

}