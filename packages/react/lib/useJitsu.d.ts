import { EventPayload, UserProps } from "@jitsu/sdk-js";
declare function useJitsu(): {
    id: (userData: UserProps, doNotSendEvent?: boolean) => Promise<void>;
    trackEvent: (typeName: string, payload?: EventPayload) => Promise<void>;
    trackPageView: () => Promise<void>;
    rawTrack: (payload: any) => Promise<void>;
    interceptAnalytics: (analytics: any) => void;
};
export default useJitsu;
