import 'cypress-mochawesome-reporter/register';

try {
  require('cypress-terminal-report/src/installLogsCollector')({
    collectTypes: ['cy:command', 'cy:log', 'cons:warn', 'cons:error']
  });
} catch (e) {}

import './commands';
