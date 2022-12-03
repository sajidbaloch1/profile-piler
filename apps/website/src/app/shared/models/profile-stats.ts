import { ProfileStatsModel } from './profile-stats-model';
import { ProfileViewModel } from './profile-view-model';
import { SocialFeedModel } from './social-feed-model';

export class ProfileStats {
  private profile: ProfileViewModel;
  private posts: SocialFeedModel[];
  private totalReducer = (pVal: number, cVal: number) => {
    return pVal + cVal;
  };
  private numberFilterer = (num: any) => !isNaN(num);

  constructor(profile: ProfileViewModel, posts: SocialFeedModel[]) {
    if (posts.length > 5) {
      // discard recent posts
      posts.splice(0, 2);
    }
    this.profile = profile;
    this.posts = posts;
  }

  calculate(): ProfileStatsModel {
    const stats: ProfileStatsModel = {
      AvgComments: this.calculateAvg('commentsCount'),
      AvgLikes: this.calculateAvg('likesCount'),
      AvgPlays: this.calculateAvg('playCount'),
      AvgRetweets: this.calculateAvg('retweetCount'),
      AvgShares: this.calculateAvg('shareCount'),
      AvgRepinCount: this.calculateAvg('repinCount'),
      AvgViews: this.calculateAvg('viewsCount'),
      AvgReach: 0,
      EngagementRate: 0,
    };

    stats.AvgReach =
      stats.AvgComments +
      stats.AvgLikes +
      // stats.AvgPlays +
      stats.AvgRetweets +
      stats.AvgShares;
    // stats.AvgViews;

    stats.EngagementRate = (stats.AvgReach / this.profile.Followers) * 100;
    return stats;
  }

  private calculateAvg(fieldName: string): number {
    return (
      this.posts
        .filter((p) => p[fieldName])
        .map((p) => p[fieldName])
        .filter(this.numberFilterer)
        .reduce(this.totalReducer, 0) / this.posts.length
    );
  }
}
