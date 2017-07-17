import gendiff from '../src';

const generatePath = (ext, fileName, ...args) =>
  `./__tests__/fixtures/${args.length === 1 ? 'structured/' : ''}${ext}/${fileName}.${ext}`;

describe('gendiff tests', () => {
/*
  const result = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;
*/
  const result2 = `{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
      - setting6: {
            key: value
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}`;
/*
  it('Compare two .json files', () => {
    const before = generatePath('json', 'before');
    const after = generatePath('json', 'after');
    expect(gendiff(before, after)).toBe(result);
  });

  it('Compare two .yml files', () => {
    const before = generatePath('yml', 'before');
    const after = generatePath('yml', 'after');
    expect(gendiff(before, after)).toBe(result);
  });

  it('Compare two .ini files', () => {
    const before = generatePath('ini', 'before');
    const after = generatePath('ini', 'after');
    expect(gendiff(before, after)).toBe(result);
  });
*/
  it('Compare two json files with embedded structures', () => {
    const before = generatePath('json', 'before', true);
    const after = generatePath('json', 'after', true);
    expect(gendiff(before, after)).toBe(result2);
  });

  it('Compare two yml files with embedded structures', () => {
    const before = generatePath('yml', 'before', true);
    const after = generatePath('yml', 'after', true);
    expect(gendiff(before, after)).toBe(result2);
  });

  it('Compare two ini files with embedded structures', () => {
    const before = generatePath('ini', 'before', true);
    const after = generatePath('ini', 'after', true);
    expect(gendiff(before, after)).toBe(result2);
  });
});
