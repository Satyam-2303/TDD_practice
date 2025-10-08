const calculator= require('./calculator');

test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('should divide two numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('should return Infinity when dividing by zero', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
});

test('should correctly handle negative numbers', () => {
    expect(calculator.add(-5, 3)).toBe(-2);
});

test('should handle floating point numbers', () => {
    expect(calculator.add(2.5, 3.5)).toBe(6);
});

test('should subtract negative numers', () => {
    expect(calculator.subtract(-5, 3)).toBe(-8);
});