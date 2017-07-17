import _ from 'lodash';
import convertStatus from './status';
/*
{
key: 'key'
name: 'value' / ''
status: 'unchanged' / 'changed' / 'added' / 'removed' / 'updated' / 'unique'
update: 'value' / ''
children: [{}] / ''
}
*/

const insertWSpace = quantity => _.repeat(' ', 1 + quantity);
const NewLine = '\n';

const stringBuilder = (obj, shift = 0) =>
  _.reduce(obj, (acc, item) => {
    const status = convertStatus(item.status);
    if (!item.children) {
      const str = `${acc}${NewLine}${insertWSpace(shift)}${status}${item.key}: ${item.value}`;
      if (item.status === 'updated') {
        return str.concat(`${NewLine}${insertWSpace(shift)}${convertStatus('removed')}${item.key}: ${item.update}`);
      }
      return str;
    }
    return `${acc}${NewLine}${insertWSpace(shift)}${status}${item.key}: {` +
        `${stringBuilder(item.children, shift + 4)}${NewLine}${insertWSpace(shift + 4)}}`;
  }, '');

// it renders all the ast tree contrary to the surfaceRender()
// which renders only the top level(node) of the tree
const deepRender = (ast) => {
  const res = _.reduce(ast, (acc, item) => {
    const status = convertStatus(item.status);
    return `${acc}${NewLine}${status}${item.key}: {` +
     `${stringBuilder(item.children, 3)}${NewLine}${insertWSpace(3)}}`;
  }, '');
  return `{${res}${NewLine}}`;
};

export default deepRender;
