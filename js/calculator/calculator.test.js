const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Tarea 1
test('multiply 5 * 4 to equal 20', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});
 
test('multiply 3 * 2 to equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
 
test('divide 20 / 4 to equal 5', () => {
  expect(calculator.divide(20, 4)).toBe(5);
});
 
test('divide 9 / 2 to equal 4.5', () => {
  expect(calculator.divide(9, 2)).toBe(4.5);
});

// Tarea 3
test('divide by 0 should throw an error', () => {
  expect(() => {
    calculator.divide(20, 0);
  }).toThrow("Cannot divide by zero");
});
