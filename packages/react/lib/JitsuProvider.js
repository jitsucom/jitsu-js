"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JitsuContext_1 = require("./JitsuContext");
const JitsuProvider = function ({ children, client, }) {
    const Context = JitsuContext_1.default;
    return React.createElement(Context.Provider, { value: client }, children);
};
exports.default = JitsuProvider;
//# sourceMappingURL=JitsuProvider.js.map