import { createContext } from 'react'
import { JitsuClient } from "@jitsu/sdk-js";

const JitsuContext = createContext<JitsuClient | null>(null)

export default JitsuContext