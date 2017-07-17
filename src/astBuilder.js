import _ from 'lodash';

/*
{
  key: 'key'
  value: 'value' / ''
  status: 'unchanged' / 'changed' / 'added' / 'removed' / 'updated' / 'unique'
  update: 'value' / ''
  children: [{}, {}] / ''
}
*/

const astBuilder = (obj1, obj2) => {
  const unitedKeys = _.union(Object.keys(obj1), Object.keys(obj2));

  const result = unitedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    const node = {};
    if (_.isObject(value1) && _.isObject(value2)) {
      node.key = key;
      node.children = astBuilder(value1, value2);
    }
    if (!_.has(obj1, key)) {
      node.key = key;
      node.value = _.isObject(value2) ? '' : value2;
      node.status = obj1 === false ? 'unique' : 'added';
      if (_.isObject(value2)) {
        node.children = astBuilder(value2, false);
        return node;
      }
      node.children = false;
      return node;
    }
    if (!_.has(obj2, key)) {
      node.key = key;
      node.value = _.isObject(value1) ? '' : value1;
      node.status = obj2 === false ? 'unique' : 'removed';
      if (_.isObject(value1)) {
        node.children = astBuilder(false, value1);
        return node;
      }
      node.children = false;
      return node;
    }
    if ((_.has(obj1, key) === _.has(obj2, key)) &&
    !(_.isObject(value1) && _.isObject(value2))) {
      node.key = key;
      if (value1 === value2) {
        node.value = value1;
        node.status = 'unchanged';
        node.children = false;
        return node;
      }
      node.value = value2;
      node.status = 'updated';
      node.update = value1;
      node.children = false;
      return node;
    }
    return node;
  });
  return result;
};

export default astBuilder;
