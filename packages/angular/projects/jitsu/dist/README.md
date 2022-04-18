# Official Jitsu SDK for Angular

## Questions?

### [Join Jitsu Slack](https://jitsu.com/slack)

## Links

- [Official SDK Docs](https://jitsu.com/docs/sending-data/js-sdk)

## General

This package is a wrapper around `@jitsu/sdk-js`, with added functionality related to Angular.

## Installation

To use Jitsu SDK, install npm package

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
      // See Jitsu SDK parameters section for more options
    }),
  ],
  // ...
})
export class AppModule {}
```

## Usage

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

## Jitsu SDK parameters and methods

Read about all SDK parameters and methods in our [documentation](https://jitsu.com/docs/sending-data/js-sdk):
* [parameters](https://jitsu.com/docs/sending-data/js-sdk/parameters-reference)
* [methods](https://jitsu.com/docs/sending-data/js-sdk/methods-reference)

You can call SDK methods from `NgxJitsuService`.
