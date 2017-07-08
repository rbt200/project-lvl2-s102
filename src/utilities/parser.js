import yml from 'js-yaml';
import ini from 'ini';

export default (ext) => {
  switch (ext) {
    case '.json' :
      return JSON.parse;
    case '.yml' || 'yaml':
      return yml.safeLoad;
    default:
      return ini.parse;
  }
};
