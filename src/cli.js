import program from 'commander';
import { version, description } from 'package.json';

console.log(description);
export default () => {
  program
    .version(version)
    .arguments('<firstConfig> <secondConfig>')
    .description(description)
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};
