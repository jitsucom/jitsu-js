"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const JitsuContext_1 = require("./JitsuContext");
function useJitsu() {
    const client = (0, react_1.useContext)(JitsuContext_1.default);
    const id = (0, react_1.useCallback)((userData, doNotSendEvent) => client === null || client === void 0 ? void 0 : client.id(userData, doNotSendEvent), [client]);
    const trackPageView = (0, react_1.useCallback)(() => client === null || client === void 0 ? void 0 : client.track('pageview'), [client]);
    const track = (0, react_1.useCallback)((typeName, payload) => client === null || client === void 0 ? void 0 : client.track(typeName, payload), [client]);
    const rawTrack = (0, react_1.useCallback)((payload) => client === null || client === void 0 ? void 0 : client.rawTrack(payload), [client]);
    const interceptAnalytics = (0, react_1.useCallback)((analytics) => client === null || client === void 0 ? void 0 : client.interceptAnalytics(analytics), [client]);
    return {
        id,
        track,
        trackPageView,
        rawTrack,
        interceptAnalytics
    };
}
exports.default = useJitsu;
//# sourceMappingURL=useJitsu.js.map