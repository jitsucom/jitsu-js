import { Inject, Injectable } from '@angular/core';
import { JITSU_CONFIG } from "./ngx-jitsu.config";
import { jitsuClient } from "@jitsu/sdk-js";
import * as i0 from "@angular/core";
export class NgxJitsuService {
    constructor(config) {
        this.config = config;
        this.id = (userData, doNotSendEvent) => {
            this.client.id(userData, doNotSendEvent);
        };
        this.track = (typeName, payload) => {
            this.client.track(typeName, payload);
        };
        this.trackPageView = () => {
            this.client.track('pageview');
        };
        this.rawTrack = (payload) => {
            this.client.rawTrack(payload);
        };
        this.interceptAnalytics = (analytics) => {
            this.client.interceptAnalytics(analytics);
        };
        this.client = jitsuClient(config);
    }
}
NgxJitsuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuService, deps: [{ token: JITSU_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
NgxJitsuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [JITSU_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWppdHN1LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL25neC1qaXRzdS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQWdCLFdBQVcsRUFBd0MsTUFBTSxlQUFlLENBQUM7O0FBS2hHLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW1ELE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFJaEUsT0FBRSxHQUFHLENBQUMsUUFBbUIsRUFBRSxjQUF3QixFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQzFDLENBQUMsQ0FBQTtRQUVNLFVBQUssR0FBRyxDQUFDLFFBQWdCLEVBQUUsT0FBc0IsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUE7UUFFTSxrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFFTSxhQUFRLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFFTSx1QkFBa0IsR0FBRyxDQUFDLFNBQWMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBO1FBckJDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25DLENBQUM7OzRHQUxVLGVBQWUsa0JBR04sWUFBWTtnSEFIckIsZUFBZSxjQUZkLE1BQU07MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUljLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSklUU1VfQ09ORklHIH0gZnJvbSBcIi4vbmd4LWppdHN1LmNvbmZpZ1wiO1xuaW1wb3J0IHsgSml0c3VPcHRpb25zLCBqaXRzdUNsaWVudCwgSml0c3VDbGllbnQsIEV2ZW50UGF5bG9hZCwgVXNlclByb3BzIH0gZnJvbSBcIkBqaXRzdS9zZGstanNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4Sml0c3VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEppdHN1Q2xpZW50XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChKSVRTVV9DT05GSUcpIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBKaXRzdU9wdGlvbnMpIHtcbiAgICB0aGlzLmNsaWVudCA9IGppdHN1Q2xpZW50KGNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBpZCA9ICh1c2VyRGF0YTogVXNlclByb3BzLCBkb05vdFNlbmRFdmVudD86IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLmNsaWVudC5pZCh1c2VyRGF0YSwgZG9Ob3RTZW5kRXZlbnQpXG4gIH1cblxuICBwdWJsaWMgdHJhY2sgPSAodHlwZU5hbWU6IHN0cmluZywgcGF5bG9hZD86IEV2ZW50UGF5bG9hZCkgPT4ge1xuICAgIHRoaXMuY2xpZW50LnRyYWNrKHR5cGVOYW1lLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja1BhZ2VWaWV3ID0gKCkgPT4ge1xuICAgIHRoaXMuY2xpZW50LnRyYWNrKCdwYWdldmlldycpO1xuICB9XG5cbiAgcHVibGljIHJhd1RyYWNrID0gKHBheWxvYWQ6IGFueSkgPT4ge1xuICAgIHRoaXMuY2xpZW50LnJhd1RyYWNrKHBheWxvYWQpO1xuICB9XG5cbiAgcHVibGljIGludGVyY2VwdEFuYWx5dGljcyA9IChhbmFseXRpY3M6IGFueSkgPT4ge1xuICAgIHRoaXMuY2xpZW50LmludGVyY2VwdEFuYWx5dGljcyhhbmFseXRpY3MpO1xuICB9XG59XG4iXX0=