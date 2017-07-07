import path from 'path';
import yml from 'js-yaml';
import fs from 'fs';
import ini from 'ini';

const getExtention = filePath => path.parse(filePath).ext;

export default (file) => {
  const ext = getExtention(file);
  switch (ext) {
    case '.json' :
      return JSON.parse(fs.readFileSync(file, 'utf-8'));
    case '.yml' || 'yaml':
      return yml.safeLoad(fs.readFileSync(file, 'utf-8'));
    default:
      return ini.parse(fs.readFileSync(file, 'utf-8'));
  }
};
