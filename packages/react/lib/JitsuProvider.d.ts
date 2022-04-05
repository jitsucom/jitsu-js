import * as React from 'react';
import { JitsuClient } from "@jitsu/sdk-js";
export interface JitsuProviderProps {
    client: JitsuClient;
}
declare const JitsuProvider: React.FC<JitsuProviderProps>;
export default JitsuProvider;
