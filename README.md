# @x12i/memorix-completion usage example

Fill missing entity and event data in Memorix from source database records using JSON completion mappings.

This consuming application demonstrates **fill a missing record field through explicit reader and writer callbacks** using the published npm package, pinned to `1.33.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Fill missing entity fields from source database records.
- Apply a JSON completion map while preserving existing values.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-completion)
- [Implementation monorepo](https://github.com/x12i/memorix-complition)
- [Reviewed package source](https://github.com/x12i/memorix-complition/tree/1696ab16dd10574d9648783930a9afa7db312d85/.)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example uses synthetic records and local callbacks or in-memory state. It checks the demonstrated consumer behavior of the pinned npm release. It does not connect to MongoDB, Catalox, a device, an AI provider, or a deployed pipeline service.
