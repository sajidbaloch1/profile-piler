import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { PlatformEnum } from '../../models/platform.enum';
import { SocialFeedModel } from '../../models/social-feed-model';
import * as Embedo from 'embedo';

/**
 * Platforms array that does not have embedding support
 */
const unsupportedPlatforms = ['tiktok', 'flickr', 'quora'];

@Component({
  selector: 'app-social-feed-item',
  templateUrl: './social-feed-item.component.html',
  styleUrls: ['./social-feed-item.component.css'],
})
export class SocialFeedItemComponent implements AfterViewInit, OnInit {
  @Input() feed: SocialFeedModel;
  @Input() platform: PlatformEnum | string;
  @ViewChild('container') container: ElementRef;
  @Output() loaded = new EventEmitter();

  showCustom = false;
  loading = true;

  private embedo;
  constructor(private detectionRef: ChangeDetectorRef) {
    this.embedo = new Embedo({
      facebook: {
        appId: '', // Enable facebook SDK
        version: 'v2.10',
      },
      twitter: true, // Enable twitter SDK
      instagram: true, // Enable instagram SDK
      pinterest: true, // Enable pinterest SDK,
    });

    this.embedo.on('watch', (event) => {
      if (event === 'load') {
        this.emitLoadedEvent();
      }
    });
  }

  ngOnInit(): void {
    this.showCustom =
      unsupportedPlatforms.indexOf(this.platform.toLowerCase()) !== -1;
  }

  private loadEmbedo() {
    const item = this.embedo.load(this.container.nativeElement, this.feed.url, {
      width: 350,
    });
    item.done(() => this.emitLoadedEvent());
    item.fail(() => this.emitLoadedEvent());
  }

  ngAfterViewInit() {
    if (this.showCustom) {
      setTimeout(() => {
        this.emitLoadedEvent();
      }, 250);
    }
    this.loadEmbedo();
  }

  private emitLoadedEvent() {
    this.loading = false;
    this.detectionRef.detectChanges();
    this.loaded.emit();
  }

  parseLineBreaks(str: string) {
    if (!str) {
      return str;
    }
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
}
