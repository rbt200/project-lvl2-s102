import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import yml from 'js-yaml';

const getExtention = filePath => path.parse(filePath).ext;

const parseFile = (file) => {
  const ext = getExtention(file);
  let result;
  switch (ext) {
    case '.json' :
      result = JSON.parse(fs.readFileSync(file).toString());
      break;
    case '.yml' || 'yaml':
      result = yml.safeLoad(fs.readFileSync(file, 'utf8').toString());
      break;
    default:
      break;
  }
  return result;
};

export default (first, second) => {
  const f = parseFile(first);
  const s = parseFile(second);
  getExtention(first);
  let res = '';
  _.forEach(f, (value, key) => {
    _.forEach(s, (value2, key2) => {
      if (key === key2 && value === value2) { res += `    ${key}: ${value}\n`; }
      if (key === key2 && value !== value2) { res += `  + ${key2}: ${value2}\n`; res += `  - ${key}: ${value}\n`; }
    });
  });

  _.forEach(f, (value, key) => {
    if (!_.has(s, key)) { res += `  - ${key}: ${value}\n`; }
  });

  _.forEach(s, (value, key) => {
    if (_.isEmpty(_.pick(f, key))) { res += `  + ${key}: ${value}\n`; }
  });

  return `{\n${res}}`;
};
