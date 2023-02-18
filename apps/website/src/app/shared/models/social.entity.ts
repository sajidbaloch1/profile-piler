export interface SocialEntity {
    Facebook: string;
    Instagram: string;
    Youtube: string;
    Twitter: string;
    Tiktok: string;
    Email: string;
    Website: string;
    Pinterest: string;
    Flickr: string;
    Quora: string;
    Tumblr: string;
    LinkedIn: string;
    Vimeo: string;
    Reddit: string;
    Medium: string;
    TravelMassive: string;
    DailyMotion: string;
  }
  
  export interface SocialEntityStats extends SocialEntity {
    Stats?: {
      Facebook: { Followers: number; LikesCount: number; IsVerified: boolean };
      Instagram: { Followers: number; IsVerified: boolean };
      Youtube: {
        Followers: number;
        VideoCount: number;
        IsVerified: boolean;
        ViewsCount: number;
        IsFamilySafe: boolean;
      };
      Twitter: { Followers: number; PostCount: number };
      Tiktok: {
        Followers: number;
        LikesCount: number;
        IsVerified: boolean;
        VideoCount: number;
      };
      Pinterest: {
        Followers: number;
        PinCount: number;
        ProfileViewedCount: number;
        CommunitiesJoined: number;
        BoardCount: number;
      };
      Flickr: { Followers: number; GeoTags: number };
      Quora: {
        Followers: number;
        AnswersCount: number;
        QuestionsCount: number;
        PostCounts: number;
      };
      TravelMassive: {
        Followers: number;
        EventsCount: number;
        IsVerified: boolean;
      };
    };
  }
  