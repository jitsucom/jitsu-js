# Official Jitsu SDK for React

## Questions?

### [Join Jitsu Slack](https://jitsu.com/slack)

## Links

- [Official SDK Docs](https://jitsu.com/docs/sending-data/js-sdk)

## General

This package is a wrapper around `@jitsu/sdk-js`, with added functionality related to React.

## Installation

To use this SDK, install npm packages

```bash
npm install @jitsu/react
```

Import and configure Jitsu SDK Provider.

```javascript
//...
import { createClient, JitsuProvider } from "@jitsu/react";

const jitsuClient = createClient({
  tracking_host: "__JITSU_HOST__",
  key: "__API_KET__",
  // See Jitsu SDK options section for more options
});

ReactDOM.render(
  <React.StrictMode>
    <JitsuProvider client={jitsuClient}>
      <App />
    </JitsuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### Usage

base:
```javascript
import { useJitsu } from "@jitsu/react";

const App = () => {
  const {id, trackEvent, trackPageView} = useJitsu();

  useEffect(() => {
    id({id: '__USER_ID__', email: '__USER_EMAIL__'})
    trackPageView()
  }, [])
  
  const onClick = (btnName: string) => {
    trackEvent('btn_click', {btn: btnName});
  }
  
  return (
    <button onClick="() => onClick('test_btn')">Test button</button>
  )
}
```

`usePageView` with react-router:
```javascript
const App = () => {
  usePageView() //this hook will send pageview track event on router change

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="page" element={<Page />} />
    </Routes>
  );
}
```

### Jitsu SDK options

| Parameter         | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `key`             | `string`  | **Required**. [API key How to get API key](https://jitsu.com/docs/configuration/authorization)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `tracking_host`   | `string`  | Jitsu tracking host.<br/>Default: `t.jitsu.com`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `cookie_name`     | `string`  | Name of tracking cookie.<br/>Default: `__eventn_id`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cookie_name`     | `string`  | Name of tracking cookie.<br/>Default: `__eventn_id`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cookie_domain`   | `string`  | Domain of the tracking cookie (by default this is location.hostname with any www. subdomain removed).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `segment_hook`    | `boolean` | If set to true, Jitsu will automatically listen to Segment's analytics.js events and collect them.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `randomize_url`   | `boolean` | If set to true, Jitsu will send events on a dynamic endpoint. It allows avoiding ad blockers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `ip_policy`       | `enum`    | `['keep', 'comply', 'strict']` values are supported.<br/><br/>`keep` - Jitsu extracts client IP address and stores it in every analytics event in `'source_ip'` field.<br/><br/>`strict` - Jitsu replaces last octet in client IP address with '1' on the backend side. like `10.10.10.10 -> 10.10.10.1`<br/><br/>`comply` - Jitsu detects client country with [MaxMind](https://jitsu.com/docs/other-features/geo-data-resolution#maxmind) (if MaxMind isn't provided the behavior will be like in strict mode) if client is from EU or UK then the behavior will be like in strict mode. Otherwise like in keep mode. Read more about [Privacy Policy](https://jitsu.com/docs/sending-data/privacy-policy)<br/>Default: `keep`                                               |
| `cookie_policy`   | `enum`    | `['keep', 'comply', 'strict']` values are supported.<br/><br/>`keep` - Jitsu writes identification cookies and recognizes users with it.<br/><br/>`strict` - Jitsu doesn't write any cookies (including identification cookies and persistent properties). Instead of cookies, Jitsu will use fingerprinting ( hash(client ip + user agent) function).<br/><br/>`comply` - Jitsu detects client country with [MaxMind](https://jitsu.com/docs/other-features/geo-data-resolution#maxmind) (if MaxMind isn't provided the behavior will be like in strict mode) if client is from EU or UK then the behavior will be like in strict mode. Otherwise like in keep mode. Read more about [Privacy Policy](https://jitsu.com/docs/sending-data/privacy-policy)<br/>Default: `keep` |
| `privacy_policy`  | `boolean` | This parameter is just shortcut for `strict` configuration of `cookie_policy` and `ip_policy`. If set to strict value, `cookie_policy` and `ip_policy` will be set `strict`. Read more about [Privacy Policy](https://jitsu.com/docs/sending-data/privacy-policy)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `force_use_fetch` | `boolean` | This parameter forces SDK to use the fetch implementation (custom or default) even in browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `custom_headers`  | `boolean` | This parameter adds custom headers to each request. Can be either a static object (`Record<string, string>`) or a function that returns an object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Hooks

### useJitsu

Returns object with `id`, `trackEvent`, `trackPageView`, `rawTrack` and `interceptAnalytics` methods of Jitsu SDK.

### usePageView

Can be used only with react-router. Sends `pageview` event on every route change.

### Jitsu SDK API

### id: (userData: UserProps, doNotSendEvent?: boolean) => Promise
Sets a user data.

| Param           | Type        | Description                                                             |
|-----------------|-------------|-------------------------------------------------------------------------|
| userData        | `UserProps` | user data                                                               |
| doNotSendEvent? | `boolean`   | if true (false by default), separate "id" event won't be sent to server |

### track: (typeName: string, payload?: EventPayload) => Promise
Sends a track event to server.

| Param    | Type           | Description   |
|----------|----------------|---------------|
| typeName | `string`       | event name    |
| payload? | `EventPayload` | event payload |

### rawTrack: (payload: any) => Promise
Similar to `track`, but send unstructured payload to EventNative processing pipeline.
No additional detection (user-agent, url and so on will be done). No payload structure is enforced.

| Param   | Type  | Description   |
|---------|-------|---------------|
| payload | `any` | event payload |

### trackPageView: () => Promise
Sends track event with `pageview` name.

### interceptAnalytics: (analytics: any) => void
Explicit call for intercepting Segment's analytics.

| Param     | Type  | Description             |
|-----------|-------|-------------------------|
| analytics | `any` | window.analytics object |