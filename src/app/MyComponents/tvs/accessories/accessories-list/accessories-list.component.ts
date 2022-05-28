import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit {

  trgItem : any;
  public id: any;
  
  constructor(private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) { 
    this.id = this.id;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.trgItem = this.accessories.find(item => {return item.ID === this.id});
  }
  accessories = [
    {ID: 'riding-gloves-black',accessoriesImg: 'https://tvsnepal.com/images/accessories/RAIDING-GLOVES--BLACK-60c235876cda3Riding-gloves-1-(1).jpg', Name: 'RIDING GLOVES  BLACK ', Price: ' Rs. 3500', content: 'For riders who demand a completely hands on experience, TVS Racing gloves provide exactly that. Tested to the limit, they offer the ultimate protection while simultaneously maintaining complete comfort.'},
    {ID: 'riding-pant-neonline',accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-PANT-NEON-LINE60c2344b67d44riding-Pant-Neon-Line-1.jpg', Name: 'RIDING PANT NEON LINE', Price: ' Rs. 12000', content: "Designed for use on the road and highways, the riding pants combines utility and comfort to provide the ultimate riding experience. The pants has been created keeping in mind the rider’s position, so that it seamlessly provides support. It’s constructed with Multi-fabric shells and abrasion resistant materials that offer unparalleled safety. This line of riding pants are for those who seek open roads and want to enjoy the experience along the way."},
    {ID: 'riding-pant-neon-line',accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-PANT-NEON-LINE-60c233a8b7996Riding-Jacket-Neon-Line-1.jpg', Name: 'RIDING JACKET NEON LINE', Price: ' Rs. 13500', content: 'Designed for use on the road and highways, the riding jacket combines utility and comfort to provide the ultimate riding experience. The jacket has been created keeping in mind the rider’s position, so that it seamlessly provides support. It’s constructed with Multi-fabric shells and abrasion resistant materials that offer unparalleled safety. This line of riding jackets are for those who seek open roads and want to enjoy the experience along the way.'},
    {ID: 'riding-pant-red-line',accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-PANT-NEON-LINE-60c233a8b7996Riding-Jacket-Neon-Line-1.jpg', Name: 'RIDING PANT RED LINE L', Price: ' Rs. 12000', content: 'Designed for use on the road and highways, the riding pants combines utility and comfort to provide the ultimate riding experience. The pants has been created keeping in mind the rider’s position, so that it seamlessly provides support. It’s constructed with Multi-fabric shells and abrasion resistant materials that offer unparalleled safety. This line of riding pants are for those who seek open roads and want to enjoy the experience along the way.'},
    {ID: 'riding-jacket-redline',accessoriesImg: 'https://tvsnepal.com/images/accessories/RIDING-JACKET-REDLINE-60c2313702b75riding-jacket-1.jpg', Name: 'RIDING JACKET REDLINE', Price: 'Rs. 13500', content: 'Designed for use on the road and highways, the riding jacket combines utility and comfort to provide the ultimate riding experience. The jacket has been created keeping in mind the rider’s position so that it seamlessly provides support. It’s constructed with Multi-fabric shells and abrasion-resistant materials that offer unparalleled safety. This line of riding jackets are for those who seek open roads and want to enjoy the experience along the way.'},
    {ID: 'seat-cover-black-ntorq',accessoriesImg: 'https://tvsnepal.com/images/accessories/SEAT-COVER-BLACK---NTORQ60c22edb3d9a4TVS-Ntorq-125-Seat-118601.jpg', Name: 'SEAT COVER BLACK - NTORQ', Price: 'Rs. 850', content: ''},
    {ID: 'kit-sctr-guard-ntorq',accessoriesImg: 'https://tvsnepal.com/images/accessories/KIT-SCTR-GUARD---NTORQ60c22dc0132e4ntorqK2220530.jpg', Name: 'KIT SCTR GUARD - NTORQ', Price: 'Rs. 3800', content: ''},
    {ID: 'glove-box-assy-ntorq',accessoriesImg: 'https://tvsnepal.com/images/accessories/Glove-Box-Assy---Ntorq60c22d5027c2cGLOVE-BOX-ASSY-(K2220370).jpg', Name: 'Glove Box Assy - Ntorq', Price: 'Rs. 450', content: ''},
    {ID: 'floor-mat-black-btorq',accessoriesImg: 'https://tvsnepal.com/images/accessories/FLOOR-MAT-BLACK---NTORQ60c22b26d8775ntorqrepeatK2220450.jpg', Name: 'FLOOR MAT BLACK - NTORQ', Price: 'Rs. 400', content: ''},
  ]
}
