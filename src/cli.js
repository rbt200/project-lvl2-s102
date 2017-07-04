import program from 'commander';
import { bin } from 'package';

export default () => {
  program
    .version(bin)
    .arguments('<firstConfig> <secondConfig>')
    .description(bin)
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};
