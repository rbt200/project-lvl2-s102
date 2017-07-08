import compare from './utilities/compare';
import parser from './utilities/parser';

export default (file1, file2) => {
  const obj1 = parser(file1);
  const obj2 = parser(file2);
  return compare(obj1, obj2);
};
