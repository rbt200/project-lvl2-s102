import _ from 'lodash';
import parser from '../src/utilities/parser';

const gendiff = (obj1, obj2) => {
  const firstFile = Object.keys(obj1);
  const secondFile = Object.keys(obj2);
  const unitedKeys = _.union(firstFile, secondFile);

  const result = unitedKeys.reduce((acc, key) => {
    if (firstFile.includes(key) && secondFile.includes(key)) {
      if (obj1[key] === obj2[key]) {
        acc += `    ${key}: ${obj2[key]}\n`;
        return acc;
      }
      if (obj1[key] !== obj2[key]) {
        acc += `  + ${key}: ${obj2[key]}\n`;
        acc += `  - ${key}: ${obj1[key]}\n`;
        return acc;
      }
    }
    if (!secondFile.includes(key)) {
      acc += `  - ${key}: ${obj1[key]}\n`;
      return acc;
    }
    if (!firstFile.includes(key)) {
      acc += `  + ${key}: ${obj2[key]}\n`;
      return acc;
    }
    return acc;
  }, '');
  return `{\n${result}}`;
};

export default (file1, file2) => {
  const obj1 = parser(file1);
  const obj2 = parser(file2);
  return gendiff(obj1, obj2);
};
