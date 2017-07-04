import program from 'commander';
import { bin } from 'package';

export default () => {
  program
    .version(version)
    .arguments('<firstConfig> <secondConfig>')
    .description(bin)
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};
