# Santi's Small Summation Library

[![Build Status](https://github.com/santi100a/summation-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/santi100a/summation-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/summation-lib)](https://npmjs.org/package/@santi100/summation-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/summation-lib.svg)](https://github.com/santi100a/summation-lib)
[![License](https://img.shields.io/github/license/santi100a/summation-lib.svg)](https://github.com/santi100a/summation-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/summation-lib)](https://bundlephobia.com/package/@santi100/summation-lib@latest)

- 📘 Comes with built-in TypeScript definitions
- 🚀 Lightweight and fast
- 👴 Compliant with ECMAScript 3

## API

- `function sum(arr: number[]): number;` Sum up the numbers in an array.
  |Name | Type | Description | Optional? |
  |------|----------|-----------------------------------------|-----------|
  |`arr` | `number[]` | An array of numbers. | No |

  Returns the sum of all numbers in the array.

- `function sum(fn: (n: number) => number, start: number, end: number, step?: number): number;`

  Sums up numbers in [`start`, `end`] (with a step of `step`).

  | Name    | Type                    | Description                                            | Optional? |
  | ------- | ----------------------- | ------------------------------------------------------ | --------- |
  | `fn`    | `(n: number) => number` | A math function to process every number in the range.  | No        |
  | `start` | `number`                | Inclusive start of the range.                          | No        |
  | `end`   | `number`                | Inclusive end of the range.                            | No        |
  | `step`  | `number`                | Optional step between every iteration (defaults to 1). | Yes       |

  Returns the sum of [`start`, `end`] with a step of `step`.

## Usage

```typescript
import sum from '@santi100/summation-lib'; // ESM
const sum = require('@santi100/summation-lib')['default']; // CJS

// Example 1: Summing up numbers in an array
const arr = [1, 2, 3, 4, 5];
const result1 = sum(arr);
console.log(result1); // Output: 15

// Example 2: Summing up numbers in a range with a step
const fn = (n: number) => 1 / n;
const start = 1;
const end = 5;
const step = 2;
const result2 = sum(fn, start, end, step);
console.log(result2); // Output: 1.5333333333333332
```
