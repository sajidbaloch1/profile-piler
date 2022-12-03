import { ProfileViewModel } from "./profile-view-model";

export interface ProfileSearchResponse {
  errors: string[];
  success: boolean;
  profiles: ProfileViewModel[];
  pagging: {
    total: number;
    pageSize: number;
  };
}
