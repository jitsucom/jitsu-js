import React, { createContext, useContext, useCallback } from 'react';
import { jitsuClient } from '@jitsu/sdk-js';

const JitsuContext = createContext(null);

const JitsuProvider = function ({ children, client, }) {
    const Context = JitsuContext;
    return React.createElement(Context.Provider, { value: client }, children);
};

function createClient(params) {
    return jitsuClient(params);
}

function useJitsu() {
    const client = useContext(JitsuContext);
    const id = useCallback((userData, doNotSendEvent) => client === null || client === void 0 ? void 0 : client.id(userData, doNotSendEvent), [client]);
    const trackPageView = useCallback(() => client === null || client === void 0 ? void 0 : client.track('pageview'), [client]);
    const trackEvent = useCallback((typeName, payload) => client === null || client === void 0 ? void 0 : client.track(typeName, payload), [client]);
    const rawTrack = useCallback((payload) => client === null || client === void 0 ? void 0 : client.rawTrack(payload), [client]);
    const interceptAnalytics = useCallback((analytics) => client === null || client === void 0 ? void 0 : client.interceptAnalytics(analytics), [client]);
    return {
        id,
        trackEvent,
        trackPageView,
        rawTrack,
        interceptAnalytics
    };
}

export { JitsuContext, JitsuProvider, createClient, useJitsu };
//# sourceMappingURL=index.es.js.map
