import {useEffect} from "react";
import {useLocation} from "react-router";
import useJitsu from "./useJitsu";
import {EventPayload, JitsuClient} from "@jitsu/sdk-js";

/**
 * @param opts.callback callback that should be called sending data to jitsu. This will be a good place to identify user
 *                      or/and set a global parameters
 * @param opts.before additional parameters (aka payload)
 */
function usePageView(opts: { before?: (jitsu: JitsuClient) => void, payload?: EventPayload } = {}): JitsuClient {
    let location = useLocation();
    const jitsu = useJitsu()
    useEffect(() => {
        if (opts.before) {
            opts.before(jitsu);
        }
        jitsu.track('pageview', opts.payload);
    }, [location, jitsu.track, opts.payload, opts.before]);

    return jitsu;
}

export default usePageView;