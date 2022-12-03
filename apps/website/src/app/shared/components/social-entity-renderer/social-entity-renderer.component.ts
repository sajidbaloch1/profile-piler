import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SocialEntity } from '../../models/social-entity';
import { generateExternalLink } from '../../utils';

@Component({
  selector: 'app-social-entity-renderer',
  templateUrl: './social-entity-renderer.component.html',
  styleUrls: ['./social-entity-renderer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialEntityRendererComponent {
  @Input()
  socialEntity: SocialEntity;
  get website(): string {
    if (this.socialEntity) {
      if (this.socialEntity.Website.indexOf('http') === -1) {
        return `http://${this.socialEntity.Website}`;
      }
    }
    return '';
  }
  generateExternalLink = generateExternalLink;
}
