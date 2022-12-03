import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileViewModel } from '../../shared/models';
import { AjaxService } from '../../shared/services/ajax.service';
import { SocialEntityStats } from '../../shared/models/social-entity';

export interface IGetProfileResponse {
  success: boolean;
  payload: ProfileViewModel;
}

@Injectable({
  providedIn: 'root',
})
export class ProfilePageDataService {
  private $dataStream: BehaviorSubject<ProfileViewModel> = new BehaviorSubject<
    ProfileViewModel
  >(null);

  private activeRoute: ActivatedRoute;
  private dataSubscription: Subscription;

  get dataStream(): BehaviorSubject<ProfileViewModel> {
    return this.$dataStream;
  }

  constructor(private ajax: AjaxService) {}

  subscribeDataStream(activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
    this.dataSubscription = this.activeRoute.data.subscribe((data) => {
      if (data.profile && data.profile.success) {
        this.$dataStream.next(data.profile.payload);
        this.loadSocialEntity(data.profile.payload);
      } else this.loadAndPublishData();
    });
  }

  unsubscribeDataStream() {
    this.dataSubscription.unsubscribe();
  }

  getProfile(
    platform: string,
    relativeURL: string
  ): Observable<IGetProfileResponse> {
    return this.ajax.get<IGetProfileResponse>(
      `profile/${platform}/${relativeURL}`
    );
  }

  /**
   * Return profiles all social platforms usernames along the stats i.e likes, followers, etc
   */
  getProfileSocialStats(
    platform: string,
    relativeURL: string
  ): Promise<SocialEntityStats> {
    const endPoint = `social-entity/min/${platform}/${relativeURL}`;
    return this.ajax
      .get<SocialEntityStats>(endPoint, { stats: true })
      .toPromise();
  }
  private async loadSocialEntity(profile: ProfileViewModel) {
    const socialEntityStats = await this.getProfileSocialStats(
      profile.Platform,
      profile.RelativeURL
    );

    this.dataStream.next({ ...profile, SocialEntity: socialEntityStats });
  }

  private async loadAndPublishData() {
    const data = await this.getProfile(
      this.activeRoute.snapshot.params.platform,
      this.activeRoute.snapshot.params.relativeURL
    ).toPromise();
    this.$dataStream.next(data.payload);
    this.loadSocialEntity(data.payload);
  }
}
