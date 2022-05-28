import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogarea',
  templateUrl: './blogarea.component.html',
  styleUrls: ['./blogarea.component.css']
})
export class BlogareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs = [
    {ID: 'tvs-dashain-offer-2021', Image: 'https://tvsnepal.com/images/blog/TVS-Dashain-Offer-2021612ecf9c4d6ffWhatsApp-Image-2021-08-31-at-9.58.11-PM.jpeg', Name: 'TVS Dashain Offer 2021', Date: '2021-09-01', content: ''},
    {ID: 'Celebrating-50000-ntorqians', Image: 'https://tvsnepal.com/images/blog/Celebrating-50000-Ntorqians611f659b5ebe0WhatsApp-Image-2021-08-20-at-1.42.54-PM.jpeg', Name: 'Celebrating 50000 Ntorqians', Date: '2021-08-20', content: ' TVS Motor Company, a reputed two-wheeler and three-wheeler manufacturer globally, today announced that the TVS NTORQ 125, its sporty, Bluetoo'},
    {ID: 'Nepal-first-bike-scooter',Image: 'https://tvsnepal.com/images/blog/60b9f8406f19a.jpg', Name: 'Nepal’s first bike and scooter with SmartXConnect ', Date: '2021-06-04', content: 'The world around us is moving ahead faster and is getting smarter by the day. TVS believes in keeping up with the advancing technology and times an'},
    {ID: 'TVS-new-year-2078', Image: 'https://tvsnepal.com/images/blog/60c1a8320fa65.jpg', Name: 'TVS New Year 2078 | Wa Wah Wahhh offer | ', Date: '2021-06-04', content: 'Jagdamba Motors, TVS Nepal has come up with the amazing Wah, Wa, Wahhh offer for this New Year, where you can get a cash discount of up to Rs. 10,0'},
    {ID: 'Women-on-bikes',Image: 'https://tvsnepal.com/images/blog/Women-on-bikes5e9067cb4b93fWhatsApp-Image-2020-03-02-at-3.33.11-PM.jpeg', Name: 'Women on bikes', Date: '2021-06-04'},
    {ID: 'Most-memorable-motorcycle-trip',Image: 'https://tvsnepal.com/images/blog/5e686f8594fd5.jpg', Name: 'Most memorable Motorcycle Trip – Of Brotherhoods and Perils', Date: '2020-03-10'},
    {ID: 'Tips-tricks-to-maintain-engine-in-winter',Image: 'https://tvsnepal.com/images/blog/TIPS-AND-TRICKS-TO-MAINTAIN-ENGINE-IN-WINTER5e3bc22fbaff5bde587e3-157f-463a-ac56-7e4ea48ab364.jpg', Name: 'TIPS AND TRICKS TO MAINTAIN ENGINE IN WINTER', Date: '2020-02-06'},
    {ID: 'Scooter-make-urban-commuting-easier',Image: 'https://tvsnepal.com/images/blog/5e184946d081b.jpg', Name: 'How does a scooter make urban commuting easier?', Date: '2020-01-09'},
    {ID: '5-best-places-to-go-on-a-bike-ride-in-Nepal',Image: 'https://tvsnepal.com/images/blog/-5-Best-Places-to-Go-on-a-Bike-Ride-in-Nepal-5df22fa36391a-5-Best-Places-to-Go-on-a-Bike-Ride-in-Nepal-5dca5f5e1520dIMG_20190320_133829.jpg', Name: '5 Best Places to Go on a Bike Ride in Nepal', Date: '2019-11-01'},
    {ID: 'How-to-clean-your-motocycle',Image: 'https://tvsnepal.com/images/blog/How-to-clean-your-motorcycle5cf8dc4f042a7Blog.png', Name: 'How to clean your motorcycle', Date: '2019-06-04'}
  ]
}
