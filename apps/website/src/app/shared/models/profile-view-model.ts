import { PlateFormEnum } from "./plateform.enum";
import { SocialEntityStats } from "./social.entity";

export interface ProfileBase {
    Platform: PlateFormEnum;
    Id: string;
    RelativeURL: string;
  }
  
  export interface ProfileViewModel extends ProfileBase {
    Username: string;
    ProfilePic: string;
    Description: string;
    Followers: number;
    Location?: string;
    IsVerified?: string;
    IsFamilySafe?: string;
    Name: string;
    TweetCount: number;
    ViewsCount: number;
    VideoCount: number;
    LikesCount: number;
    EventsCount: number;
    Profession: string;
    Company: string;
    Category: string;
    PostCount: number;
    PlatformID?: string;
    SecUid?: string;
    FavoritesCount: number;
    PhotosCount: number;
    PhotoViewsCount: number;
    GeoTags: number;
    City: string;
    Education: string;
    AnswersCount: number;
    QuestionsCount: number;
    CheckinsCount: number;
    Rating: number;
    UpdatedAt: string;
    ShortDescription: string;
    SocialEntity: SocialEntityStats;
  }
  