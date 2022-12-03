import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-platform-icon',
  templateUrl: './platform-icon.component.html',
  styleUrls: ['./platform-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformIconComponent {
  @Input()
  platform: string;

  @Input()
  cssClasses = '';

  getPlatformIconName() {
    if (!this.platform) {
      return '';
    }
    let name = (this.platform as string).toLocaleLowerCase();
    switch (this.platform) {
      case 'TT':
        name = 'Tiktok';
        break;
      case 'Facebook':
        name = 'facebook';
        break;
      case 'YT':
        name = 'youtube';
        break;
      case 'Twitter':
        name = 'twitter';
        break;
      case 'IG':
        name = 'instagram';
        break;
      case 'TravelMassive':
        name = 'TM';
        break;
    }
    return name;
  }
}
