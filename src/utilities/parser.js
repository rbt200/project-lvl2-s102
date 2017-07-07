import fs from 'fs';
import path from 'path';
import yml from 'js-yaml';

const getExtention = filePath => path.parse(filePath).ext;

export default (file) => {
  const ext = getExtention(file);
  const result = [];
  switch (ext) {
    case '.json' :
      result.push(JSON.parse(fs.readFileSync(file)));
      break;
    case '.yml' || 'yaml':
      result.push(yml.safeLoad(fs.readFileSync(file)));
      break;
    default:
      break;
  }
  return result.pop();
};
