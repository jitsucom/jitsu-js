import { NextRequest, NextResponse } from "next/server";
import { ClientProperties } from "@jitsu/sdk-js/src/interface";
import { serialize, CookieSerializeOptions } from 'cookie'

function middlewareEnv(req: NextRequest, res: NextResponse, opts: { disableCookies?: boolean } = {}) {
  return {
    getAnonymousId({ name, domain }): string {
      if (opts?.disableCookies) {
        return "";
      }

      const cookie = req.cookies[name];
      if (cookie) {
        return cookie;
      }

      const cookieOpts: CookieSerializeOptions = {
        maxAge: 31_622_400 * 10,
        httpOnly: false,
      };
      if (domain) {
        cookieOpts.domain = domain;
      }

      let newId = Math.random().toString(36).substring(2, 12);
      res.headers.set("Set-Cookie", serialize(name, newId, cookieOpts));
      return newId;
    },
    getSourceIp() {
      let ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || req.ip;
      return ip && ip.split(",")[0].trim();
    },
    describeClient(): ClientProperties {
      const requestHost = req.headers.get("x-forwarded-host") || req.headers.get("host") || req.nextUrl.hostname;
      const proto = req.headers.get("x-forwarded-proto") || req.nextUrl.protocol?.replace(":", "")
      let query = req.nextUrl.search;
      let path = req.nextUrl.pathname;
      return {
        doc_encoding: "",
        doc_host: requestHost,
        doc_path: req.url,
        doc_search: query,
        page_title: "",
        referer: req.headers.get("referrer"),
        screen_resolution: "",
        url: `${proto}://${requestHost}${path || ""}${query || ""}`,
        user_agent: req.headers.get("user-agent"),
        user_language: req.headers.get("accept-language") && req.headers.get("accept-language").split(",")[0],
        vp_size: "",
      };
    },
  };
}

export default middlewareEnv;