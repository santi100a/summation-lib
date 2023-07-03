/**
 * Sum up the numbers in an array.
 *
 * @param arr An array of numbers.
 * @returns The sum of all numbers in the array.
 */
declare function sum(arr: number[]): number;
/**
 * Sum up numbers in [`start`, `end`] (with a step of `step`).
 *
 * @param fn A math function to process every number in the range.
 * @param start Inclusive start of the range.
 * @param end Inclusive end of the range.
 * @param step Optional step between every iteration (defaults to 1).
 * @returns The sum of [`start`, `end`] with a step of `step`.
 */
declare function sum(fn: (n: number) => number, start: number, end: number, step?: number): number;
declare namespace sum {
    var _a: typeof sum;
    export { _a as default };
}
export = sum;
