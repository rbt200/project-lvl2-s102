import _ from 'lodash';

export default (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unitedKeys = _.union(keys1, keys2);

  const result = unitedKeys.reduce((acc, key) => {
    const KeyName1 = obj1[key];
    const KeyName2 = obj2[key];
    if (keys1.includes(key) && keys2.includes(key)) {
      if (KeyName1 === KeyName2) {
        return acc.concat(`    ${key}: ${KeyName2}\n`);
      }
      if (KeyName1 !== KeyName2) {
        return acc.concat(`  + ${key}: ${KeyName2}\n`).concat(`  - ${key}: ${KeyName1}\n`);
      }
    }
    if (!keys2.includes(key)) {
      return acc.concat(`  - ${key}: ${KeyName1}\n`);
    }
    if (!keys1.includes(key)) {
      return acc.concat(`  + ${key}: ${KeyName2}\n`);
    }
    return acc;
  }, '');
  return `{\n${result}}`;
};
