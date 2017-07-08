import gendiff from '../src';

const generatePath = (type, action) => {
  return `./__tests__/fixtures/${type}/${action}.${type}`;
};

describe('gendiff tests', () => {
  const result = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';

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
});
