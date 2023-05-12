# dom-automator

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Package for analyzing and automating actions on a DOM

## Install

```bash
npm install dom-automator
```

## Usage

```ts
import { createAgent, createActionScript } from 'dom-automator'

const getCurrentDOM = async (): string => {
  return '<html></html>'
}

const agent = await createAgent('Send an email to Todd that I cant make the meeting today', getCurrentDOM)

// agent.actions() is an AsyncGenerator
for await (const act of agent.actions()) {
    console.log('Executing:', act)
    const js = createActionScript(act)
    // Act it out here
}
```

[build-img]:https://github.com/getcanopy/dom-automator/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/getcanopy/dom-automator/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/dom-automator
[downloads-url]:https://www.npmtrends.com/dom-automator
[npm-img]:https://img.shields.io/npm/v/dom-automator
[npm-url]:https://www.npmjs.com/package/dom-automator
[issues-img]:https://img.shields.io/github/issues/getcanopy/dom-automator
[issues-url]:https://github.com/getcanopy/dom-automator/issues
[codecov-img]:https://codecov.io/gh/getcanopy/dom-automator/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/getcanopy/dom-automator
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
