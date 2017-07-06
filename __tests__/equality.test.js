import gendiff from '../src';

const before = '__tests__/fixtures/json/before.json';
const after = '__tests__/fixtures/json/after.json';
const result = '{\n    host: \"hexlet.io\"\n  + timeout: 20\n  - timeout: 50\n  - proxy: "123.234.53.22"\n  + verbose: "true"\n}';

test('Compare two .json files', () => {
  expect(gendiff(before, after)).toBe(result);
});
