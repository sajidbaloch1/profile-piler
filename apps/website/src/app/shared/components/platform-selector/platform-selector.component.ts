import { Component,Input } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PlateFormEnum } from '../models/plateform.enum';

@Component({
  selector: 'pp-platform-selector',
  templateUrl: './platform-selector.component.html',
  styleUrls: ['./platform-selector.component.scss']
})
export class PlatformSelectorComponent {
  @Input() mode: 'One' | 'Multi' = 'Multi'
  constructor(
    private primeConfig: PrimeNGConfig
  ){}

  plateforms:PlateFromSelectItem[]=[
    {
      value: 'instagram',
      name: 'Instagram',
      selected: false,
      plateform: PlateFormEnum.Instagram,
    },{
      value: 'twitter',
      name: 'Twitter',
      selected: false,
      plateform: PlateFormEnum.Twitter,
    },{
      value: 'youtube',
      name: 'Youtube',
      selected:false,
      plateform: PlateFormEnum.Youtube,
    },
    {
      value:'tiktok',
      name: 'TikTok',
      selected:false,
      plateform: PlateFormEnum.Tiktok
    },{
      value: 'travelmassive',
      name: 'Travel Messive',
      selected: false,
      plateform:PlateFormEnum.TravelMassive,
    },
    {
      value:'facebook',
      name:'Facebook',
      selected: false,
      plateform: PlateFormEnum.Facebook,
    },{
      value: 'flickr',
      name: 'Flickr',
      selected: false,
      plateform: PlateFormEnum.Flickr,
    },{
      value: 'pinterest',
      name: 'Pinterest',
      selected: false,
      plateform:PlateFormEnum.Pinterest,
    },{
      value: 'quora',
      name: 'Quora',
      selected:false,
      plateform: PlateFormEnum.Quora
    }
  ]

  ngOnInit(){
    this.primeConfig.ripple = true
  }
  BasicShow: boolean = false

  showDialog(){
    this.BasicShow = true
  }
  onItemClicked(plateform:PlateFromSelectItem){
    plateform.selected = !plateform.selected;
    if(this.mode === 'One'){
      this.plateforms.forEach((p)=>(p.selected = false));
      plateform.selected = !plateform.selected;

    }

  }
}
interface PlateFromSelectItem{
  value: string;
  name:string;
  selected: boolean;
  plateform:PlateFormEnum
}
