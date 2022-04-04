import { useCallback, useContext } from "react";
import JitsuContext from "./JitsuContext";
import { EventPayload, UserProps } from "@jitsu/sdk-js";

function useJitsu() {
  const client = useContext(JitsuContext)

  const id = useCallback(
    (userData: UserProps, doNotSendEvent?: boolean): Promise<void> => client?.id(userData, doNotSendEvent),
    [client],
  )

  const trackPageView = useCallback(
    (): Promise<void> => client?.track('pageview'),
    [client],
  )

  const trackEvent = useCallback(
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
    id,
    trackEvent,
    trackPageView,
    rawTrack,
    interceptAnalytics
  }
}

export default useJitsu;