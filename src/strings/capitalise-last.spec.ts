import { capitaliseLast } from './capitalise-last';

describe('capitaliseLast', () => {
  it('should capitalise the last character of a string', () => {
    expect(capitaliseLast('testing')).toEqual('testinG');
  });

  it('should capitalise the last n characters of a string', () => {
    expect(capitaliseLast('testing', 3)).toEqual('testING');
  });
});
