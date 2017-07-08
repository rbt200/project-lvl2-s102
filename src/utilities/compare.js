import _ from 'lodash';

export default (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unitedKeys = _.union(keys1, keys2);

  const result = unitedKeys.reduce((acc, key) => {
    const OBJ1_KEY = obj1[key];
    const OBJ2_KEY = obj2[key];
    if (keys1.includes(key) && keys2.includes(key)) {
      if (OBJ1_KEY === OBJ2_KEY) {
        return acc.concat(`    ${key}: ${OBJ2_KEY}\n`);
      }
      if (OBJ1_KEY !== OBJ2_KEY) {
        return acc.concat(`  + ${key}: ${OBJ2_KEY}\n`).concat(`  - ${key}: ${OBJ1_KEY}\n`);
      }
    }
    if (!keys2.includes(key)) {
      return acc.concat(`  - ${key}: ${OBJ1_KEY}\n`);
    }
    if (!keys1.includes(key)) {
      return acc.concat(`  + ${key}: ${OBJ2_KEY}\n`);
    }
    return acc;
  }, '');
  return `{\n${result}}`;
};
