import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.css']
})
export class MainblogComponent implements OnInit {

  constructor() { }

  blog = [
    {Image: 'https://tvsnepal.com/images/ntorqians.jpg', ID: 'ntorq',  Name: 'Ntorqians'},
    {Image: 'https://tvsnepal.com/images/aog.jpg', ID: 'aog', Name: 'AOG'},
    {Image: 'https://tvsnepal.com/images/press-release.png', ID: 'press-release', Name: 'Press Release'},
  ]
  

  ngOnInit(): void {
  }

}
