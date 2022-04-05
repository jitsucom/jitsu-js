# Official Jitsu SDK for Angular

## Questions?

### [Join Jitsu Slack](https://jitsu.com/slack)

## Links

- [Official SDK Docs](https://jitsu.com/docs/sending-data/js-sdk)

## General

This package is a wrapper around `@jitsu/sdk-js`, with added functionality related to Angular.

## Installation

To use this SDK, install npm packages

```bash
npm install @jitsu/angular
```

and import Jitsu SDK module to your Angular application.

```javascript
import { NgxJitsuModule } from '@jitsu/angular';

@NgModule({
  // ...
  imports: [
    NgxJitsuModule.forRoot({
      tracking_host: "__JITSU_HOST__",
      key: "__API_KET__",
      // See Jitsu SDK options section for more options
    }),
  ],
  // ...
})
export class AppModule {}
```

#### Usage

```javascript
@Component({
  selector: 'app-root',
  template: '<button (click)="onBtnClick(\'test_btn\')">Test button</button>',
})
export class AppComponent implements OnInit {
  constructor(private jitsuTracker: NgxJitsuService) {}

  onBtnClick(btnName:string) {
    this.jitsuTracker.trackEvent('btn_click_event', {btn: btnName})
  }
  
  ngOnInit() {
    this.jitsuTracker.id({id: '__USER_ID__', email: '__USER_EMAIL__'})
    this.jitsuTracker.trackPageView()
  }
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

### Jitsu SDK API (you can call these methods from NgxJitsuService)

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
