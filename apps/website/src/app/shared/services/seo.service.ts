import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface IPageMetaData {
  title: string;
  description?: string;
  url?: string;
  keywords?: string[]
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private titleService: Title,
    private route: Router
  ) { }

  setPageMetaData(metaData: IPageMetaData) {
    this.titleService.setTitle(`${metaData.title} - ProfilePiler`);
    // please add the url path 
    // console.log(`${}`)

    if (metaData.description) {
      this.meta.addTag({
        name: 'description',
        content: metaData.description,
      });
    }

    if (metaData.keywords && metaData.keywords.length > 0) {
      this.meta.addTag({
        name: "keywords",
        content: metaData.keywords.join(", ")
      });
    }

    //  please add environment path on meta addTage
    //  this.meta.addTag({
    //   name: "url",
    //   content:
    //  })

    this.meta.addTag({
      name: "robots",
      content: "index,follow",
    })

  }


}
