import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'pp-plateform-icon',
  templateUrl: './plateform-icon.component.html',
  styleUrls: ['./plateform-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlateformIconComponent {
  @Input() plateform?: string;
  @Input() cssClasses = '';

  getPlatformIconName() {
    if (!this.plateform) {
      return '';
    }
    let name = (this.plateform as string).toLocaleLowerCase();
    switch (this.plateform) {
      case 'TT':
        name = 'Tiktok';
        break;
      case 'Facebook':
        name = 'facebook';
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
      case 'YT':
        name = 'youtube';
        break;

    }
    return name;
  }
}
