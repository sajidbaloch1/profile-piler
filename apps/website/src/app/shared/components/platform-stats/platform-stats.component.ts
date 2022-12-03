import { Component, OnInit, Input } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';

@Component({
  selector: 'app-platform-stats',
  templateUrl: './platform-stats.component.html',
  styleUrls: ['./platform-stats.component.css']
})
export class PlatformStatsComponent implements OnInit {
  @Input()
  heading = 'Social Profiles Stats';
  platforms = [
    // { name: 'Twitter', iconColor: '#00b0f3', totalProfiles: 2222 },
    // { name: 'Instagram', iconColor: '#f86b75', totalProfiles: 2222 },
    // { name: 'Facebook', iconColor: '#295dc0', totalProfiles: 2222 },
    // { name: 'Youtube', iconColor: '#f3594c', totalProfiles: 2222 },
    // { name: 'Tumblr', iconColor: '#3b5876', totalProfiles: 2222 },
    // { name: 'Pinterest', iconColor: '#f3594c', totalProfiles: 2222 },
    // { name: 'Flickr', iconColor: '#f3594c', totalProfiles: 2222 },
    // { name: 'TravelMassive', iconColor: '#f3594c', totalProfiles: 2222 },
    // { name: 'Tiktok', iconColor: '#f3594c', totalProfiles: 2222 }
  ];
  constructor(private ajax: AjaxService) {}

  async ngOnInit() {
    this.platforms = await this.ajax.get<[]>('platform-stats').toPromise();
  }
}
