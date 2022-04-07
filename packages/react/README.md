# Official Jitsu SDK for React

## Questions?

### [Join Jitsu Slack](https://jitsu.com/slack)

## Links

- [Official SDK Docs](https://jitsu.com/docs/sending-data/js-sdk)

## General

This package is a wrapper around `@jitsu/sdk-js`, with added functionality related to React.

## Installation

To use Jitsu SDK, install npm package

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
  // See Jitsu SDK parameters section for more options
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

## Usage

### base:
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

### `usePageView` with react-router:
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

## Hooks

### useJitsu

Returns object with `id`, `trackEvent`, `trackPageView`, `rawTrack`, `set`, `unset` and `interceptAnalytics` methods of Jitsu SDK.

### usePageView

Can be used only with react-router. Sends `pageview` event on every route change.

## Jitsu SDK parameters and methods

Read about all SDK parameters and methods in our [documentation](https://jitsu.com/docs/sending-data/js-sdk):
* [parameters](https://jitsu.com/docs/sending-data/js-sdk/parameters-reference)
* [methods](https://jitsu.com/docs/sending-data/js-sdk/methods-reference)

All SDK methods are provided in `useJitsu` hook.