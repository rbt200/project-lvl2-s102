import gendiff from '../src/bin/gendiff.js';

const before = 'before.json';
const after = 'after.json';
const result = 'result';

test('Compare two .json files', () => {
  expect(gendiff(before, after)).toBe(result);
});
