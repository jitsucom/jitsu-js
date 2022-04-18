"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
const useJitsu_1 = require("./useJitsu");
function usePageView(payload) {
    let location = (0, react_router_1.useLocation)();
    const { track } = (0, useJitsu_1.default)();
    (0, react_1.useEffect)(() => {
        track('pageview', payload);
    }, [location, track, payload]);
}
exports.default = usePageView;
