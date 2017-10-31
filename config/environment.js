'use strict';

const fs = require('fs');
const defaultModuleConfigurationPath = __dirname + '/../node_modules/@glimmer/application-pipeline/lib/broccoli/default-module-configuration.ts';
const defaultModuleConfigurationString = fs.readFileSync(defaultModuleConfigurationPath, 'utf-8');

const moduleConfiguration = eval('(' + defaultModuleConfigurationString.replace('export default', '').replace(';', '') + ')');

moduleConfiguration['types']['reducer'] = {
  definitiveCollection: 'reducers'
};
moduleConfiguration['collections']['reducer'] = {
  types: ['reducers/index'],
  defaultType: 'reducer'
};

moduleConfiguration['types']['store'] = {
  definitiveCollection: 'store'
};
moduleConfiguration['collections']['store'] = {
  types: ['store'],
  defaultType: 'store'
};

moduleConfiguration['types']['saga'] = {
  definitiveCollection: 'sagas'
};
moduleConfiguration['collections']['saga'] = {
  types: ['sagas/index'],
  defaultType: 'saga'
};

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'saga',
    environment: environment,
    moduleConfiguration
  };

  return ENV;
};
