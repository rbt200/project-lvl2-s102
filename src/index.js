import fs from 'fs';
import path from 'path';
import compare from './utilities/compare';
import parser from './utilities/parser';

export default (file1, file2) => {
  const ext1 = path.parse(file1).ext;
  const ext2 = path.parse(file2).ext;
  const obj1 = parser(ext1)(fs.readFileSync(file1, 'utf-8'));
  const obj2 = parser(ext2)(fs.readFileSync(file2, 'utf-8'));
  return compare(obj1, obj2);
};
