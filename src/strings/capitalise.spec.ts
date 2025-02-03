import { capitalise } from './capitalise';

describe('capitalise', () => {
  it('should capitalise by the default values (full length of string)', () => {
    expect(capitalise('testing')).toEqual('TESTING');
  });

  it('should capitalise only the characters with an index greater than or equal than the start provided', () => {
    expect(capitalise('testing', { start: 2 })).toEqual('teSTING');
  });

  it('should capitalise only the characters with an index less than or equal than the end provided', () => {
    expect(capitalise('testing', { end: 2 })).toEqual('TEsting');
  });

  it('should capitalise only the characters with an index greater than or equal than the start provided and less than or equal than the end provided', () => {
    expect(capitalise('testing', { start: 2, end: 4 })).toEqual('teSTing');
  });

  it('should capitalise from the beginning of the string if the start provided is less than 0', () => {
    expect(capitalise('testing', { start: -1, end: 4 })).toEqual('TESTing');
  });

  it('should capitalise to the end of the string if the end provided is greater than the length of the string', () => {
    expect(capitalise('testing', { start: 1, end: 10 })).toEqual('tESTING');
  });
});
