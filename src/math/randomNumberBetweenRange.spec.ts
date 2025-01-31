import { numberArrayFromRange } from 'number-array-from-range';
import { randomNumberBetweenRange } from './randomNumberBetweenRange';

describe('randomNumberBetweenRange', () => {
  it('should generate a random number between two positive numbers', () => {
    const possibleValues = numberArrayFromRange(2, 10);
    const value = randomNumberBetweenRange(2, 10);

    expect(possibleValues.includes(value)).toBe(true);
  });

  it('should generate a random number between two negative numbers', () => {
    const possibleValues = numberArrayFromRange(-200, -11);
    const value = randomNumberBetweenRange(-200, -11);

    expect(possibleValues.includes(value)).toBe(true);
  });

  it('should generate a random number between a positive and negative number', () => {
    const possibleValues = numberArrayFromRange(-8, 5);
    const value = randomNumberBetweenRange(-8, 5);

    expect(possibleValues.includes(value)).toBe(true);
  });

  it('should generate a random number between decimals', () => {
    const possibleValues = numberArrayFromRange(-2.2, 4.8);
    const value = randomNumberBetweenRange(-2.2, 4.8);

    expect(possibleValues.includes(value)).toBe(true);
  });

  it('should be able to return the min or max number', () => {
    const min = 0;
    const max = 1;
    const maxAttempts = 10000;
    let attempt = 0;

    const results: any[] = [];

    while ((!results.includes(min) || !results.includes(max)) && attempt < maxAttempts) {
      results.push(randomNumberBetweenRange(min, max));

      attempt++;
    }

    expect(results.includes(min)).toBe(true);
    expect(results.includes(max)).toBe(true);
  });
});
