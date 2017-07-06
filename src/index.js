import fs from 'fs';
import _ from 'lodash';

export default (first, second) => {
  const f = JSON.parse(fs.readFileSync(first).toString());
  const s = JSON.parse(fs.readFileSync(second).toString());

  let res = '';
  _.forEach(f, (value, key) => {
    _.forEach(s, (value2, key2) => {
      if (key === key2 && value === value2) { res += `    ${key}: "${value}"\n`; }
      if (key === key2 && value !== value2) { res += `  + ${key2}: ${value2}\n`; res += `  - ${key}: ${value}\n`; }
    });
  });

  _.forEach(f, (value, key) => {
    if (!_.has(s, key)) { res += `  - ${key}: "${value}"\n`; }
  });

  _.forEach(s, (value, key) => {
    if (_.isEmpty(_.pick(f, key))) { res += `  + ${key}: "${value}"\n`; }
  });

  return `{\n${res}}`;
};
