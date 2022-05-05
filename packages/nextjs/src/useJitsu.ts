import { useCallback, useContext } from "react";
import JitsuContext from "./JitsuContext";
import { JitsuClient, EventPayload, UserProps } from "@jitsu/sdk-js";

/**
 * See for details http://jitsu.com/docs/sending-data/js-sdk/nextjs
 */
function useJitsu(): JitsuClient & {trackPageView: () => Promise<void>} {
  const client = useContext(JitsuContext)
  if (!client) {
    throw new Error("Before calling useJitsu() hook, please wrap your component into <JitsuProvider />. Read more in http://jitsu.com/docs/sending-data/js-sdk/nextjs")
  }

  const id = useCallback(
    (userData: UserProps, doNotSendEvent?: boolean): Promise<void> => client?.id(userData, doNotSendEvent),
    [client],
  )

  const trackPageView = useCallback(
    (): Promise<void> => client?.track('pageview'),
    [client],
  )

  const track = useCallback(
    (typeName: string, payload?: EventPayload): Promise<void> => client?.track(typeName, payload),
    [client],
  )

  const rawTrack = useCallback(
    (payload: any): Promise<void> => client?.rawTrack(payload),
    [client],
  )

  const interceptAnalytics = useCallback(
    (analytics: any): void => client?.interceptAnalytics(analytics),
    [client],
  )

  return {
    ...client,
    id,
    track,
    trackPageView,
    rawTrack,
    interceptAnalytics
  }
}

export default useJitsu;