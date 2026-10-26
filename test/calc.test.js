import { describe, it, expect } from 'vitest';
import { add, sub, mul, div, sqrt } from '../src/calc.js';

describe('calculadora básica', () => {
  it('suma', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });
});