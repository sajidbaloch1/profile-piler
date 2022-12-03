import { Injectable } from '@angular/core';
import * as Embedo from 'embedo';
import { PlatformEnum } from '../models/platform.enum';

@Injectable({
  providedIn: 'root',
})
export class EmbedoService {
  private embedo;
  constructor() {
    this.embedo = new Embedo({
      facebook: {
        appId: '', // Enable facebook SDK
        version: 'v2.10',
      },
      twitter: true, // Enable twitter SDK
      instagram: true, // Enable instagram SDK
      pinterest: true, // Enable pinterest SDK,
    });
  }

  async load(el, url: string, platform: PlatformEnum | string) {
    return new Promise((resolve) => {
      const embedoItem = this.embedo.load(el, url, {
        width: 350,
      });
      embedoItem.done(() => {
        resolve(true);
      });
      embedoItem.fail(() => {
        resolve(false);
      });

      if (
        platform === PlatformEnum.Youtube ||
        platform.toLowerCase() === 'youtube'
      ) {
        setTimeout(() => {
          resolve(true);
        }, 500);
      }
    });
  }
}
