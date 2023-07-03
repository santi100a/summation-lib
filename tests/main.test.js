/* eslint-disable @typescript-eslint/no-var-requires */

describe('sum_function', () => {
    const sum = require('..');
    // Tests that the function correctly sums an array of positive numbers
    it('test_sum_positive_numbers', () => {
        expect(sum([1, 2, 3])).toBe(6);
    });

    // Tests that the function correctly sums an array of negative numbers
    it('test_sum_negative_numbers', () => {
        expect(sum([-1, -2, -3])).toBe(-6);
    });

    // Tests that the function correctly sums an array of mixed positive and negative numbers
    it('test_sum_mixed_numbers', () => {
        expect(sum([1, -2, 3])).toBe(2);
    });

    // Tests that the function correctly sums an array of decimal numbers
    it('test_sum_decimal_numbers', () => {
        expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    });

    // Tests that the function returns 0 when given an empty array
    it('test_sum_empty_array', () => {
        expect(sum([])).toBe(0);
    });

    // Tests that the function returns 0 when start is greater than end and step is positive
    it('test_sum_start_greater_than_end_and_step_positive', () => {
        expect(sum((n) => n, 5, 1)).toBe(0);
    });

    // Human written tests
    test('happy path: it can correctly solve Σ[1, 5] 1/n', () => {
        const result = 2.283333333333333;
        const reciprocal = x => 1 / x;
        const output = sum(reciprocal, 1, 5);
        expect(output).toBeCloseTo(result);
    });
    test('happy path: it can correctly solve Σ[1, 5] 1/n with a step of 2', () => {
        const result = 1.533333333333333;
        const reciprocal = x => 1 / x;
        const output = sum(reciprocal, 1, 5, 2);
        expect(output).toBeCloseTo(result);
    });
    test('edge case: start is NaN', () => {
        expect(sum(x => x, NaN, 5)).toBe(NaN);
    });
    test('edge case: math function returns NaN', () => {
        expect(sum(() => NaN, 1, 5)).toBe(NaN);
    });
    test('edge case: first argument is not a number', () => {
        expect(() => sum('not a function or array', 1, 5)).toThrow(TypeError);
    });
    test('edge case: second argument is not a number', () => {
        expect(() => sum(Math.sin, 'not a number', 2)).toThrow(TypeError);
    });
    test('edge case: third argument is not a number', () => {
        expect(() => sum(Math.sin, 1, 'not a number')).toThrow(TypeError);
    });
    test('edge case: fourth argument is not a number', () => {
        expect(() => sum(Math.sin, 1, 5, 'not a number')).toThrow(TypeError);
    });

    test('edge case: first argument is ±Infinity', () => {
        expect(() => sum(Infinity, 1, 5)).toThrow(TypeError);
        expect(() => sum(-Infinity, 1, 5)).toThrow(TypeError);
    });
    test('edge case: second argument is ±Infinity', () => {
        expect(() => sum(Math.sin, Infinity, 2)).toThrow(TypeError);
        expect(() => sum(Math.sin, -Infinity, 2)).toThrow(TypeError);
    });
    test('edge case: third argument is ±Infinity', () => {
        expect(() => sum(Math.sin, 1, Infinity)).toThrow(TypeError);
        expect(() => sum(Math.sin, 1, -Infinity)).toThrow(TypeError);
    });
    test('edge case: fourth argument is ±Infinity', () => {
        expect(() => sum(Math.sin, 1, 5, Infinity)).toThrow(TypeError);
        expect(() => sum(Math.sin, 1, 5, -Infinity)).toThrow(TypeError);
    });
});
