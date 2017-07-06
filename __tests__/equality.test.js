import gendiff from '../src';

describe('gendiff tests', () => {
  const result = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';

  it('Compare two .json files', () => {
  const before = '__tests__/fixtures/json/before.json';
  const after = '__tests__/fixtures/json/after.json'; 
  expect(gendiff(before, after)).toBe(result);
  });
  
  it('Compare two .yml files', () => {
  const before = '__tests__/fixtures/yml/before.yml';
  const after = '__tests__/fixtures/yml/after.yml';
  expect(gendiff(before, after)).toBe(result);
  });
});
