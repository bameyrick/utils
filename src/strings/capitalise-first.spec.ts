import { capitaliseFirst } from './capitalise-first';

describe('capitaliseFirst', () => {
  it('should capitalise the first character of a string', () => {
    expect(capitaliseFirst('testing')).toEqual('Testing');
  });

  it('should capitalise the first n characters of a string', () => {
    expect(capitaliseFirst('testing', 3)).toEqual('TESting');
  });
});
