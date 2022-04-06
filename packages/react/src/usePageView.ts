import { useEffect } from "react";
import { useLocation } from "react-router";
import useJitsu from "./useJitsu";
import { EventPayload } from "@jitsu/sdk-js";

function usePageView(payload?: EventPayload) {
  let location = useLocation();
  const { track } = useJitsu()

  useEffect(() => {
    track('pageview', payload);
  }, [location, track, payload]);
}

export default usePageView;