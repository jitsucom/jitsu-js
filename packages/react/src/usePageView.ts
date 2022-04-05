import { useEffect } from "react";
import { useLocation } from "react-router";
import useJitsu from "./useJitsu";

function usePageView() {
  let location = useLocation();
  const { track } = useJitsu()

  useEffect(() => {
    track('pageview');
  }, [location, track]);
}

export default usePageView;