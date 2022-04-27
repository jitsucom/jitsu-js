import { useEffect } from "react";
import { EventPayload, JitsuClient } from "@jitsu/sdk-js";
import { useRouter } from "next/router";

/**
 * @param jitsu instance of initialized JitsuClient
 * @param opts.callback callback that should be called sending data to jitsu. This will be a good place to identify user
 *                      or/and set a global parameters
 * @param opts.before additional parameters (aka payload)
 */
function usePageView(jitsu: JitsuClient, opts: { before?: (jitsu: JitsuClient) => void, payload?: EventPayload } = {}): JitsuClient {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            if (opts.before) {
                opts.before(jitsu);
            }
            jitsu.track('pageview', opts.payload);
        }

        handleRouteChange();

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, jitsu.track, opts.payload, opts.before]);

    return jitsu;
}

export default usePageView;