export interface SocialFeedModel {
  url: string;
  image: string;
  text: string;
  time: string;
  title: string;

  likesCount?: number;
  commentsCount?: number;
  playCount?: number;
  shareCount?: number;
  retweetCount?: number;
  viewsCount?: number;
}
