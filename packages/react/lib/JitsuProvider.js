"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const JitsuContext_1 = require("./JitsuContext");
const JitsuProvider = function ({ children, client, }) {
    const Context = JitsuContext_1.default;
    return react_1.createElement(Context.Provider, { value: client }, children);
};
exports.default = JitsuProvider;
//# sourceMappingURL=JitsuProvider.js.map