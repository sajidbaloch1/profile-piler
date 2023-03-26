import { TagEntity } from '../entities/tag.entity';

export class PostDto {
  title: string;
  description: string;
  subTitle: string;
  profiles: any[];
  slug: string;
  tags: string[];

  constructor(post: any) {
    this.title = post.title;
    this.description = post.description;
    this.subTitle = post.sub_heading;
    this.profiles = Array.isArray(post.profiles) ? post.profiles.map((p: any) => JSON.parse(p.profile_json)) : [];
    this.slug = post.seo_url;
    this.tags = Array.isArray(post.tags) ? post.tags.map((t: TagEntity) => t.name) : [];
  }
}
