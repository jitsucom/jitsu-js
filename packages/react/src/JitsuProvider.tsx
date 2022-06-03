import * as React from 'react'
import JitsuContext from './JitsuContext'
import { JitsuClient } from "@jitsu/sdk-js";
import {PropsWithChildren} from "react";

export interface JitsuProviderProps {
  client: JitsuClient
}

const JitsuProvider: React.FC<PropsWithChildren<JitsuProviderProps>> = function ({children, client}) {
  const Context = JitsuContext
  return <Context.Provider value={client}>{children}</Context.Provider>
}

export default JitsuProvider