/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition:       adds two numbers (a + b)
 *   subtract - Subtraction:    subtracts b from a (a - b)
 *   multiply - Multiplication: multiplies two numbers (a * b)
 *   divide   - Division:       divides a by b (a / b); throws on division by zero
 *
 * Usage:
 *   node calculator.js <operation> <a> <b>
 *
 * Examples:
 *   node calculator.js add 3 5       # → 8
 *   node calculator.js subtract 10 4 # → 6
 *   node calculator.js multiply 3 7  # → 21
 *   node calculator.js divide 10 2   # → 5
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

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;
  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (!operation || isNaN(a) || isNaN(b)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <a> <b>');
    process.exit(1);
  }

  const ops = { add, subtract, multiply, divide };

  if (!ops[operation]) {
    console.error(`Unknown operation "${operation}". Use: add, subtract, multiply, divide`);
    process.exit(1);
  }

  try {
    const result = ops[operation](a, b);
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
