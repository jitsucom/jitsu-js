## Contributing to Jitsu SDK

The requirements: 
 * `yarn` (>=1.22)
 * `node` (>=16)

### Building

* `yarn lerna bootstrap` install all dependencies
* `yarn lerna run test` runs packages tests
* `yarn lerna run build` builds all packages

### Publishing new version

* Login with your *personal* credentials with `npm login`
* Run `lerna run build && lerna patch`
* Update examples with the latest version of package

