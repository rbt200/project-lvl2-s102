import gendiff from '../src';

test('Compare two .json files', () => {
  const before = '__tests__/fixtures/json/before.json';
  const after = '__tests__/fixtures/json/after.json';
  const result = '{\n    host: \"hexlet.io\"\n  + timeout: 20\n  - timeout: 50\n  - proxy: "123.234.53.22"\n  + verbose: "true"\n}';

  expect(gendiff(before, after)).toBe(result);
});

test('Compare two .yml files', () => {
  const before = '__tests__/fixtures/yml/before.yml';
  const after = '__tests__/fixtures/yml/after.yml';
  const result = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';

  expect(gendiff(before, after)).toBe(result);
});
