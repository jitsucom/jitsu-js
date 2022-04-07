# Jitsu JavaScript SDK

Jitsu SDK is a JavaScript SDK for [Jitsu](https://jitsu.com).<br/>Please, see
main [Jitsu JavaScript integration docs](https://jitsu.com/docs/sending-data/js-sdk) on the website.

## Supported Platforms

For each major JavaScript platform, there is a specific high-level SDK that provides all the tools you need in a single package.<br/>Please refer to the README and instructions of those SDKs for more detailed information:
 * [@jitsu/sdk-js](https://github.com/jitsucom/jitsu-js/tree/master/packages/javascript-sdk) - SDK for Browsers and Node
 * [@jitsu/react](https://github.com/jitsucom/jitsu-js/tree/master/packages/react) - SDK for React and NextJS applications
 * [@jitsu/angular](https://github.com/jitsucom/jitsu-js/tree/master/packages/angular/projects/jitsu) - SDK for Angular applications

## Maintainers Guide

This section is indented only for package maintainers.

This project uses [lerna](https://lerna.js.org/) and [yarn](https://yarnpkg.com/) for monorepo management, so you need to install this tools before starting.

### Building

 * `lerna bootstrap` install all dependencies
 * `lerna run test` runs packages tests
 * `lerna run build` builds both npm package and `lib.js` browser bundle

### Publishing new version

 * Login with your *personal* credentials with `npm login`
 * Run `lerna run build && lerna patch`
 * Update examples with the latest version of package

## Questions?

### [Join Jitsu Slack](https://jitsu.com/slack)