import program from 'commander';
import { version,description } from 'package';

export default () => {
  program
    .version(version)
    .arguments('<firstConfig> <secondConfig>')
    .description(version)
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};
