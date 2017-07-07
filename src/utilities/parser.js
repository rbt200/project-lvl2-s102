import path from 'path';
import yml from 'js-yaml';
import fs from 'fs';
import ini from 'ini';

const getExtention = filePath => path.parse(filePath).ext;

export default (file) => {
  const ext = getExtention(file);
  const result = [];
  switch (ext) {
    case '.json' :
      result.push(JSON.parse(fs.readFileSync(file, 'utf-8')));
      break;
    case '.yml' || 'yaml':
      result.push(yml.safeLoad(fs.readFileSync(file, 'utf-8')));
      break;
    case '.ini' :
      result.push(ini.parse(fs.readFileSync(file, 'utf-8')));
      break;
    default:
      break;
  }
  return result.pop();
};
