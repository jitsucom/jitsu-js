import React from 'react'
import JitsuContext from './JitsuContext'
import { JitsuClient } from "@jitsu/sdk-js";

export interface JitsuProviderProps {
  client: JitsuClient
}

const JitsuProvider: React.FC<JitsuProviderProps> = function ({
  children,
  client,
}) {
  const Context = JitsuContext

  return <Context.Provider value={client}>{children}</Context.Provider>
}

export default JitsuProvider