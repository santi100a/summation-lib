# Template for my NPM libraries

Hello, everyone! This is a template repo for my libraries.
You'll find a readme template inside this file.

In order for the CI workflow's publishing jobs to execute successfully, you must have two
Actions secrets set up -- `NPM_AUTH_TOKEN` and `GPR_AUTH_TOKEN`.
They're set to a default dummy value "your-token-here".
You might want to check the [YAML Actions workflow](.github/workflows/ci.yml) for hints
and information you may want or need to know.

## Template features

- License (both template contents and code built from it): MIT.
- Code of conduct: adapted from the Contributor Covenant.
- Package manager: Yarn 1.22.19.
- Automatic testing: Jest.
- TypeScript 4.9.5 for built-in type definitions and support for compiling to ES3.
- ESLint and Prettier.
- Security policy and contribution guidelines.

- Self-made scripts for verification of package.json and creation of an ESM wrapper
  around TypeScript's CommonJS output to allow for usage within both CJS and ESM projects.

<!-- START README TEMPLATE -->
<!-- 
* Make sure to replace ALL placeholders.
! The readme will be broken otherwise!
-->

<!-- # Library Name -->
<!-- Badges -->
<!-- Example: 
[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/<author>/<repo>/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@<author>/<repo>
[stars badge]: https://img.shields.io/github/stars/<author>/<repo>.svg
[license badge]: https://img.shields.io/github/license/<author>/<repo>.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@<author>/<repo>

[npm home]: https://npmjs.org/package/@<author>/<repo>
[repo actions]: https://github.com/<author>/<repo>/actions
[repo url]: https://github.com/<author>/<repo>
[bundlephobia url]: https://bundlephobia.com/package/@<author>/<repo>@latest
-->

<!-- Bullet points -->
<!-- Example:
- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js
-->

<!-- ## What's this? -->
<!-- Description -->

<!-- Mentions, inspirations -->

<!-- ## Installation -->
<!-- Installation steps and/or commands -->
<!-- Example:
- Via NPM: `npm install @<author>/<repo>`
- Via Yarn: `yarn add @<author>/<repo>`
- Via PNPM: `pnpm install @<author>/<repo>`
-->

<!-- ## API -->
<!--
* If a class/function/variable is deprecated, you must cross it out by wrapping the 
* `<class/function/variable prototype/definition/type def>;` with tildes, like this:
* ~~`<class/function/variable prototype/definition/type def>;`~~ (deprecated [since <version>])

- `<class/function/variable prototype/definition/type def>;` ([since <version if not first version>]) ([deprecated [since <version>]]) <description>
   | Name       |     Type    | Description        | Optional? | Default                                |
   |------------|-------------|--------------------|-----------|----------------------------------------|
   |<param name>|<param type> |<param description> | <Yes/No>  | <N/A if not optional, else the default>|
- ...
-->

<!-- ## Usage -->
<!-- Usage examples (code snippets) -->
<!-- 
Usage examples go here
* This is a very important step.
```typescript
```
-->
<!-- ## Contribute -->

<!-- Contribution hints and basic instructions -->
<!-- Example:
Wanna contribute? [File an issue](issues) or [pull request](pulls)! 
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).
-->

<!-- ## Disclaimers -->
<!-- Any disclaimers you may need. -->
<!--
**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is just a few kilobytes in size.*
-->