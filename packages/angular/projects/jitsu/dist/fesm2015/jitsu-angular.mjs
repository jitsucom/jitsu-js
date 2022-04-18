import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { jitsuClient } from '@jitsu/sdk-js';

const JITSU_CONFIG = new InjectionToken('jitsu.config');

class NgxJitsuService {
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
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [JITSU_CONFIG]
                    }] }];
    } });

class NgxJitsuModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxJitsuTrackerModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: NgxJitsuModule,
            providers: [
                { provide: JITSU_CONFIG, useValue: config },
                NgxJitsuService,
            ],
        };
    }
}
NgxJitsuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule, deps: [{ token: NgxJitsuModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
NgxJitsuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule });
NgxJitsuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                }]
        }], ctorParameters: function () {
        return [{ type: NgxJitsuModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    } });

/*
 * Public API Surface of tracker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxJitsuModule, NgxJitsuService };
//# sourceMappingURL=jitsu-angular.mjs.map
