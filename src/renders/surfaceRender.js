import convertStatus from './status';

const NewLine = '\n';

// it gets an object and returns a string.
const stringBuilder = (obj) => {
  const str = `${NewLine}${convertStatus(obj.status)}${obj.key}: ${obj.value}`;
  if (obj.update) { return str.concat(`${NewLine}${convertStatus('removed')}${obj.key}: ${obj.update}`); }
  return str;
};

// it ges an array containing objects and returns a string made of these objects.
export default (ast) => {
  const res = ast.reduce((acc, item) => acc.concat(stringBuilder(item)), '');
  return `{${res}${NewLine}}`;
};
