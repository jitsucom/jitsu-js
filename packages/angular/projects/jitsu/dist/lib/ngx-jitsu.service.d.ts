import { JitsuOptions, EventPayload, UserProps } from "@jitsu/sdk-js";
import * as i0 from "@angular/core";
export declare class NgxJitsuService {
    private readonly config;
    private client;
    constructor(config: JitsuOptions);
    id: (userData: UserProps, doNotSendEvent?: boolean) => void;
    track: (typeName: string, payload?: EventPayload) => void;
    trackPageView: () => void;
    rawTrack: (payload: any) => void;
    interceptAnalytics: (analytics: any) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJitsuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxJitsuService>;
}
