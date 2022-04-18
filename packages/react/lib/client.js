"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_js_1 = require("@jitsu/sdk-js");
function createClient(params) {
    return (0, sdk_js_1.jitsuClient)(params);
}
exports.default = createClient;
