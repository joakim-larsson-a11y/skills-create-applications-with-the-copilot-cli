/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Covers all seven supported operations:
 *   - add        (addition)
 *   - subtract   (subtraction)
 *   - multiply   (multiplication)
 *   - divide     (division, including division-by-zero edge case)
 *   - modulo     (remainder, including modulo-by-zero edge case)
 *   - power      (exponentiation)
 *   - squareRoot (square root, including negative number edge case)
 *
 * Base examples taken from the calc-basic-operations reference:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // base example from image
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and a negative number', () => expect(add(7, -3)).toBe(4));
  test('adding zero returns the same number', () => expect(add(5, 0)).toBe(5));
  test('adds floating-point numbers', () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // base example from image
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive numbers', () => expect(subtract(20, 8)).toBe(12));
  test('subtracts negative numbers', () => expect(subtract(-3, -7)).toBe(4));
  test('subtracting larger from smaller gives negative result', () =>
    expect(subtract(2, 10)).toBe(-8));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts floating-point numbers', () =>
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  // base example from image
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and a negative number', () =>
    expect(multiply(5, -3)).toBe(-15));
  test('multiplying by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies floating-point numbers', () =>
    expect(multiply(2.5, 4)).toBeCloseTo(10));
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // base example from image
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive numbers', () => expect(divide(100, 4)).toBe(25));
  test('divides negative numbers', () => expect(divide(-12, -3)).toBe(4));
  test('divides a positive by a negative number', () =>
    expect(divide(15, -3)).toBe(-5));
  test('divides floating-point numbers', () =>
    expect(divide(7.5, 2.5)).toBeCloseTo(3));
  test('divides to produce a decimal result', () =>
    expect(divide(1, 3)).toBeCloseTo(0.333));

  // edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // base example from image
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));

  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('returns zero when evenly divisible', () => expect(modulo(9, 3)).toBe(0));
  test('works with negative dividend', () => expect(modulo(-10, 3)).toBe(-1));
  test('works with negative divisor', () => expect(modulo(10, -3)).toBe(1));
  test('works with floating-point numbers', () =>
    expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero');
  });
  test('throws an error when modulo zero by zero', () => {
    expect(() => modulo(0, 0)).toThrow('Modulo by zero');
  });
});

// ─── Power ────────────────────────────────────────────────────────────────────
describe('power', () => {
  // base example from image
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));

  test('2 ** 8 = 256', () => expect(power(2, 8)).toBe(256));
  test('raises a number to the power of zero returns 1', () =>
    expect(power(5, 0)).toBe(1));
  test('raises a number to the power of one returns itself', () =>
    expect(power(7, 1)).toBe(7));
  test('works with negative exponent', () =>
    expect(power(2, -2)).toBeCloseTo(0.25));
  test('works with fractional exponent', () =>
    expect(power(9, 0.5)).toBeCloseTo(3));
  test('works with negative base and odd exponent', () =>
    expect(power(-2, 3)).toBe(-8));
  test('works with negative base and even exponent', () =>
    expect(power(-3, 2)).toBe(9));
  test('zero to any positive power is zero', () =>
    expect(power(0, 5)).toBe(0));
});

// ─── Square Root ──────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // base example from image
  test('sqrt(16) = 4', () => expect(squareRoot(16)).toBe(4));

  test('sqrt(9) = 3', () => expect(squareRoot(9)).toBe(3));
  test('sqrt(0) = 0', () => expect(squareRoot(0)).toBe(0));
  test('sqrt(1) = 1', () => expect(squareRoot(1)).toBe(1));
  test('sqrt(2) is approximately 1.414', () =>
    expect(squareRoot(2)).toBeCloseTo(1.414));
  test('sqrt(100) = 10', () => expect(squareRoot(100)).toBe(10));
  test('sqrt(0.25) = 0.5', () => expect(squareRoot(0.25)).toBeCloseTo(0.5));

  // edge cases: negative numbers
  test('throws an error for negative integer', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });
  test('throws an error for negative float', () => {
    expect(() => squareRoot(-9.5)).toThrow('Cannot take square root of a negative number');
  });
  test('throws an error for large negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
