import { Component,Input } from '@angular/core';
import { SocialEntity } from '../../models/social.entity';
import { generateExternalLink } from '../../utils';

@Component({
  selector: 'pp-social-entity-render',
  templateUrl: './social-entity-render.component.html',
  styleUrls: ['./social-entity-render.component.css']
})
export class SocialEntityRenderComponent {
  @Input()
  socialEntity!: SocialEntity;
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
