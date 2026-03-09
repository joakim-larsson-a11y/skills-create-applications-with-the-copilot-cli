/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition:         adds two numbers (a + b)
 *   subtract   - Subtraction:      subtracts b from a (a - b)
 *   multiply   - Multiplication:   multiplies two numbers (a * b)
 *   divide     - Division:         divides a by b (a / b); throws on division by zero
 *   modulo     - Modulo:           returns remainder of a divided by b (a % b); throws if b is zero
 *   power      - Exponentiation:   raises base to the exponent (base ** exponent)
 *   squareRoot - Square Root:      returns square root of n; throws for negative numbers
 *
 * Usage:
 *   node calculator.js <operation> <a> [b]
 *
 * Examples:
 *   node calculator.js add 3 5          # → 8
 *   node calculator.js subtract 10 4    # → 6
 *   node calculator.js multiply 3 7     # → 21
 *   node calculator.js divide 10 2      # → 5
 *   node calculator.js modulo 10 3      # → 1
 *   node calculator.js power 2 8        # → 256
 *   node calculator.js squareRoot 9     # → 3
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;
  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  const unaryOps = ['squareRoot'];
  const isUnary = unaryOps.includes(operation);

  if (!operation || isNaN(a) || (!isUnary && isNaN(b))) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <a> [b]');
    process.exit(1);
  }

  const ops = { add, subtract, multiply, divide, modulo, power, squareRoot };

  if (!ops[operation]) {
    console.error(`Unknown operation "${operation}". Use: add, subtract, multiply, divide, modulo, power, squareRoot`);
    process.exit(1);
  }

  try {
    const result = isUnary ? ops[operation](a) : ops[operation](a, b);
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
