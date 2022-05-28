import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-information',
  templateUrl: './page-information.component.html',
  styleUrls: ['./page-information.component.css']
})
export class PageInformationComponent implements OnInit {

  trgItem : any;

  public id: any;
  
  constructor(private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) { 
    this.id = this.id;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this.trgItem = this.blog.find(item => {return item.ID === this.id});
  }
  blog = [
    {Image: 'https://tvsnepal.com/images/ntorqians.jpg', ID: 'ntorq',  Name: 'Ntorqians'},
    {Image: 'https://tvsnepal.com/images/aog.jpg', ID: 'aog', Name: 'AOG'},
    {Image: 'https://tvsnepal.com/images/press-release.png', ID: 'press-release', Name: 'Press Release'},
  ]

  BlogList = [
    {Image: 'https://tvsnepal.com/images/blog/TVS-NTORQ-125-crosses-sales-milestone-of-50,000-units-in-Nepal611f67f2c1008WhatsApp-Image-2021-08-20-at-1.47.50-PM.jpeg', Name: 'TVS NTORQ 125 crosses sales milestone of 50,000 units in Nepal', Date: '2021-08-20'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-sponsors-The-PUBG-Mobile-Championship-2021-in-Nepal60c2c2ab8c146Picture-1.jpg', Name: 'TVS Motor Company sponsors The PUBG Mobile Championship 2021 in Nepal (Techlekh)', Date: '2021-06-11'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-to-sponsor-PUBG-Mobile-Championship-2021-(Times-of-Nepal)60c31d3991e4ctimes-of-nepal.jpg', Name: 'TVS Motor Company to sponsor PUBG Mobile Championship 2021 (myrepublica)', Date: '2021-06-11'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-MOTOR-COMPANY-SPONSORS-THE-%E2%80%98PUBG-MOBILE-CHAMPIONSHIP-2021%E2%80%99-IN-NEPAL-(Reviews)-60c2c4c852949TVS-display-image-1%60.jpg', Name: 'TVS MOTOR COMPANY SPONSORS THE ‘PUBG MOBILE CHAMPIONSHIP 2021’ IN NEPAL (Reviews) ', Date: '2021-06-11'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-to-sponsor-The-PUBG-Mobile-Championship-Nepal-2021-(Gadgetconcern)60c2c584b4b45Picture-1.jpg', Name: 'TVS to sponsor The PUBG Mobile Championship Nepal 2021 (Gadgetconcern)', Date: '2021-06-11'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-Is-Sponsoring-%E2%80%98PUBG-Mobile-Championship-2021%E2%80%99-(Makalu-Khabar)60c30f438c0eamakalu-khabar.jpg', Name: 'TVS Motor Company Is Sponsoring ‘PUBG Mobile Championship 2021’ (Makalu Khabar)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-to-sponsor-PUBG-Mobile-Championship-2021-(Times-of-Nepal)60c31d3991e4ctimes-of-nepal.jpg', Name: 'TVS Motor Company to sponsor PUBG Mobile Championship 2021 (Times of Nepal)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-Sponsors-The-%E2%80%98PUBG-Mobile-Championship-2021%E2%80%99-In-Nepal-(nifey.com)60c322ea977c0nnnnnnn.jpg', Name: 'TVS Motor Company Sponsors The ‘PUBG Mobile Championship 2021’ In Nepal (nifey.com)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c33b869579e.jpg', Name: 'टिभीएसद्वारा पब्जी मोबाइल च्याम्पियनसिप २०२१ लाई प्रायोजन (Hamropatro.com)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c33fe63dfe0.jpg', Name: '‘पबजी मोबाइल च्याम्पियनसिप २०२१’को मुख्य प्रायोजकमा टीभीएस (ratopati) ', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c5ac608f28a.jpg', Name: '‘पबजी मोबाइल च्याम्पियनसिप २०२१’को मुख्य प्रायोजकमा टीभीएस, (एनएमबि न्यूज)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/Registration-opens-for-TVS-sponsored-PUBG-Mobile-Championship-(Khabarhub)60c5b09bcbb3bkhabarhub.jpg', Name: 'Registration opens for TVS-sponsored PUBG Mobile Championship (Khabarhub)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-sponsors-PUBG-Mobile-Championship-2021-in-Nepal-(ShareSansar)60c5b25f649e3sharesansar.jpg', Name: 'TVS Motor Company sponsors PUBG Mobile Championship 2021 in Nepal (ShareSansar)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-sponsors-The-PUBG-Mobile-Championship-2021-in-Nepal-(Auto-&-Cell)60c5bb2edbddcauto-&-cell.jpg', Name: 'TVS Motor Company sponsors The PUBG Mobile Championship 2021 in Nepal (Auto & Cell)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-sponsors-The-PUBG-Mobile-Championship-2021-in-Nepal-(-NepalNews)60c5bd0160b1cnepal-news.jpg', Name: 'TVS sponsors The PUBG Mobile Championship 2021 in Nepal (NepalNews)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%9F%E0%A4%BF%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A4%BE-%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%A7-%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8-(setopati)60c5d88515d9asetopati.jpg', Name: 'टिभीएसद्वारा पब्जी मोबाइल च्याम्पियनसिप २०२१ लाई प्रायोजन (setopati) ', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%9F%E0%A4%BF%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A4%BE-%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%A7-%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8--(Ekagaj.com)60c5da006e540ekagaj.jpg', Name: 'टिभीएसद्वारा पब्जी मोबाइल च्याम्पियनसिप २०२१ लाई प्रायोजन  (Ekagaj.com)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c5dc103d0bf.jpg', Name: '‘पब्जी मोबाइल च्याम्पियनसिप २०२१’ लाई प्रायोजन गर्दै टिभिएस (onlinekhabar)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A4%AE%E0%A4%BE-%E0%A4%9F%E0%A4%BF%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8-%E0%A4%AE%E0%A5%8B%E0%A4%9F%E0%A4%B0%E0%A4%95%E0%A5%8B-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8-(Abhiyan)60c5dd3c3664babhiyan.jpg', Name: 'पब्जी मोबाइल च्याम्पियनसिपमा टिभीएस मोटरको प्रायोजन (Abhiyan Daily)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c5e2231cf9c.jpg', Name: '‘पब्जी मोबाइल च्याम्पियनसीप २०२१’ प्रायोजन गर्दै टिभिएस मोटर कम्पनी(Makalukhabar)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c6e7b66fae0.jpg', Name: 'टीभीएस मोटरले पब्जी मोबाइल च्याम्पियनसिप २०२१ लाई प्रायोजित गर्ने (deshsanchar)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c6e9d8d973b.jpg', Name: 'टिभीएस मोटरले PUBG मोवाइल च्याम्पियनसिप २०२१लाई प्रयोजन गर्ने (अर्थ- डबली)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c6ec5aa05f0.jpg', Name: 'पब्जी मोबाइल च्याम्पियनशीप २०२१ शुरू, (लोकान्तर)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E2%80%98%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA%E2%80%99-%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%9F%E0%A5%80%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8%E0%A4%95%E0%A5%8B-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8-(%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2-%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%AD)60c6ee56d06a6nepal-live.jpg', Name: '‘पब्जी मोबाइल च्याम्पियनसिप’ लाई टीभीएसको प्रायोजन (नेपाल लाइभ)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E2%80%98%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA%E2%80%99-%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%9F%E0%A5%80%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8%E0%A4%95%E0%A5%8B-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8-(%E0%A4%96%E0%A4%AC%E0%A4%B0%E0%A4%B9%E0%A4%AC)60c6efb869d1bkhabar-hub.jpg', Name: '‘पब्जी मोबाइल च्याम्पियनसिप’ लाई टीभीएसको प्रायोजन (खबरहब)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%A7-%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%9F%E0%A5%80%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8%E0%A4%95%E0%A5%8B-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8-(artharojgar)60c6f15d5d272artha-rojgar.jpg', Name: 'पब्जी मोबाइल च्याम्पियनसिप २०२१ लाई टीभीएसको प्रायोजन (artharojgar)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c6f68bce72b.jpg', Name: '‘पब्जी मोबाइल च्याम्पियनसिप २०२१’ लाई प्रायोजित गर्दै टीभीएस (नेपालखबर)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%A7-%E0%A4%95%E0%A5%8B-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%95-%E0%A4%AC%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%88-%E0%A4%9F%E0%A5%80%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8-(nepal-auto)60c6f7f084294nepal-auto.jpeg', Name: 'पब्जी मोबाइल च्याम्पियनसिप २०२१ को प्रायोजक बन्दै टीभीएस (nepal auto)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c6f995af360.jpg', Name: 'पब्जी मोबाइल च्याम्पियनसिप २०२१ को प्रायोजन टीभीएस मोटरले गर्ने (बाह्रखरी)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%A7-%E0%A4%95%E0%A5%8B-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%95-%E0%A4%9F%E0%A5%80%E0%A4%AD%E0%A5%80%E0%A4%8F%E0%A4%B8-(AutoExpress)60c6fae8ca5fbauto-express.jpg', Name: 'पब्जी मोबाइल च्याम्पियनसिप २०२१ को प्रायोजक टीभीएस (AutoExpress)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/60c6fc8dd48e9.jpg', Name: 'पब जी मोबाइल च्याम्पियनशीप २०२१ को प्रायोजक टिभीएस मोटर (नेटिजन नेपाल)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/%E0%A4%9F%E0%A4%BF%E0%A4%AD%E0%A4%BF%E0%A4%8F%E0%A4%B8%E0%A4%B2%E0%A5%87-%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80-%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A4%B8%E0%A4%BF%E0%A4%AA-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8-%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%A8%E0%A5%87-(reportersnepal)60c6ff0b85c1creportesnepal.jpg', Name: 'टिभिएसले पब्जी मोबाइल च्याम्पियनसिप प्रायोजन गर्ने (reportersnepal)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-Motor-Company-Sponsors-The-%E2%80%98PUBG-Mobile-Championship-2021%E2%80%99-In-Nepal60c2fdd8a5af5TVS-PUG-Mobile-Championship-2021-Featured-Image-1110x577.jpg', Name: 'TVS Motor Company Sponsors The ‘PUBG Mobile Championship 2021’ In Nepal (Nepal Drives)', Date: '2021-04-18'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-awards-RR-310-to-winner-of-%E2%80%98TVS-Dashain-Ko-Asha%E2%80%99-(my-Republica)60c74543def5emy-republica.jpg', Name: 'TVS awards RR 310 to winner of ‘TVS Dashain Ko Asha’ (my Republica)', Date: '2020-10-05'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-has-unveiled-the-%E2%80%98TVS-Dashain-Ko-Asha%E2%80%99-scheme-in-view-of-the-upcoming-big-festivals-Dashain-and-Tihar-(Nepali-Ad)60c7801bc4a0fnepali-ad.jpg', Name: 'TVS has unveiled the ‘TVS Dashain Ko Asha’ scheme in view of the upcoming big festivals Dashain and Tihar (Nepali Ad)', Date: '2020-09-21'},
    {Image: 'https://tvsnepal.com/images/blog/Jagdamba-Motors-conducts-%E2%80%9CTVS-Super-Exchange-Finance-Fair%E2%80%9D-(-Nepal-Bahas)60c7437bc2bc6nepal-bahas.jpg', Name: 'Jagdamba Motors conducts “TVS Super Exchange Finance Fair” ( Nepal Bahas)', Date: '2019-10-17'},
    {Image: 'https://tvsnepal.com/images/blog/60c7247a5c9d9.jpg', Name: 'TVS Dashain Ko Daud: Oppurtunity to Win up to Rs. 1 Lakh & 100% Cash Back! (techlekh)', Date: '2019-09-27'},
    {Image: 'https://tvsnepal.com/images/blog/60c726bd283fb.jpg', Name: 'TVS Dashain Ko Daud: Oppurtunity to Win up to Rs. 1 Lakh & 100% Cash Back! (hamropatro)', Date: '2019-09-27'},
    {Image: 'https://tvsnepal.com/images/blog/TVS-launches-TVS-Dashain-Ko-Daud-consumer-promotion-scheme;-win-cash-discounts-upto-Rs-1-lakh-even-without-visiting-TVS-showrooms-(sharesansar)60c70b93d32d5sharesansar-dashain-daud.jpg', Name: 'TVS launches TVS Dashain Ko Daud consumer promotion scheme; win cash discounts upto Rs 1 lakh even without visiting TVS showrooms (sharesansar)', Date: '2019-08-28'},
    {Image: 'https://tvsnepal.com/images/blog/Viber,-Jagdamba-Motors-give-away-TVS-scooter-to-Laxmi-Poudel-(New-Business-Age)60c707fe35e5bnew-business-age.jpg', Name: 'Viber, Jagdamba Motors give away TVS scooter to Laxmi Poudel (New Business Age)', Date: '2019-05-26'},
    {Image: 'https://tvsnepal.com/images/blog/Rakuten-Viber-and-Jagdamba-Motors-Give-away-TVS-Ntorq125cc-Scooter-(SPOTLIGHT)60c70a279e46fspotlight.jpg', Name: 'Rakuten Viber and Jagdamba Motors Give away TVS Ntorq125cc Scooter (SPOTLIGHT)', Date: '2019-03-25'},
  ]
}
