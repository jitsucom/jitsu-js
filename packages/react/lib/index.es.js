import * as React from 'react';
import { createContext, useContext, useCallback, useEffect } from 'react';
import { jitsuClient } from '@jitsu/sdk-js';
import { useLocation } from 'react-router';

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
    const track = useCallback((typeName, payload) => client === null || client === void 0 ? void 0 : client.track(typeName, payload), [client]);
    const rawTrack = useCallback((payload) => client === null || client === void 0 ? void 0 : client.rawTrack(payload), [client]);
    const interceptAnalytics = useCallback((analytics) => client === null || client === void 0 ? void 0 : client.interceptAnalytics(analytics), [client]);
    return {
        id,
        track,
        trackPageView,
        rawTrack,
        interceptAnalytics
    };
}

function usePageView(payload) {
    let location = useLocation();
    const { track } = useJitsu();
    useEffect(() => {
        track('pageview', payload);
    }, [location, track, payload]);
}

export { JitsuContext, JitsuProvider, createClient, useJitsu, usePageView };
//# sourceMappingURL=index.es.js.map
