/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
	assertExclusiveMax,
	assertExclusiveMin,
	assertTypeOf,
} from '@santi100/assertion-lib';

/**
 * Sum up the numbers in an array.
 *
 * @param arr An array of numbers.
 * @returns The sum of all numbers in the array.
 */
function sum(arr: number[]): number;
/**
 * Sum up numbers in [`start`, `end`] (with a step of `step`).
 *
 * @param fn A math function to process every number in the range.
 * @param start Inclusive start of the range.
 * @param end Inclusive end of the range.
 * @param step Optional step between every iteration (defaults to 1).
 * @returns The sum of [`start`, `end`] with a step of `step`.
 */
function sum(
	fn: (n: number) => number,
	start: number,
	end: number,
	step?: number
): number;

function sum(
	arrOrFn: number[] | ((n: number) => number),
	start?: number,
	end?: number,
	step = 1
) {
	if (arrOrFn instanceof Array) {
		let sum = 0;
		for (const n of arrOrFn) {
			assertTypeOf(n, 'number', 'n');
			sum += n;
		}
		return sum;
	} else if (typeof arrOrFn === 'function') {
		let sum = 0;
		assertTypeOf(end, 'number', 'end');
		assertTypeOf(start, 'number', 'start');
		assertTypeOf(step, 'number', 'step');

		assertExclusiveMax(start, Infinity, 'start');
		assertExclusiveMin(start, -Infinity, 'start');

		assertExclusiveMax(end, Infinity, 'end');
		assertExclusiveMin(end, -Infinity, 'end');

		assertExclusiveMax(step, Infinity, 'step');
		assertExclusiveMin(step, -Infinity, 'step');

		if (isNaN(start!) || isNaN(end!) || isNaN(step)) return NaN;

		for (let i = start!; i <= end!; i += step) {
			const result = arrOrFn(i);
			assertTypeOf(result, 'number', 'result');
			if (isNaN(result)) return NaN;
			sum += result;
		}
		return sum;
	} else {
		throw new TypeError(
			`"arrOrFn" must be of type "function" or an instance of Array. Got "${arrOrFn}" of type "${typeof arrOrFn}".`
		);
	}
}
sum.default = sum; // for backward compatibility

export = sum;
