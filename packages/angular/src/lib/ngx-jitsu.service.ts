import { Inject, Injectable } from '@angular/core';
import { JITSU_CONFIG } from "./ngx-jitsu.config";
import { JitsuOptions, jitsuClient, JitsuClient, EventPayload, UserProps } from "@jitsu/sdk-js";

@Injectable({
  providedIn: 'root'
})
export class NgxJitsuService {
  private client: JitsuClient

  constructor(@Inject(JITSU_CONFIG) private readonly config: JitsuOptions) {
    this.client = jitsuClient(config)
  }

  public id = (userData: UserProps, doNotSendEvent?: boolean) => {
    this.client.id(userData, doNotSendEvent)
  }

  public track = (typeName: string, payload?: EventPayload) => {
    this.client.track(typeName, payload);
  }

  public trackPageView = () => {
    this.client.track('pageview');
  }

  public rawTrack = (payload: any) => {
    this.client.rawTrack(payload);
  }

  public interceptAnalytics = (analytics: any) => {
    this.client.interceptAnalytics(analytics);
  }
}
