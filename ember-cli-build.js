'use strict';

const glimmerRedux = require('rollup-plugin-glimmer-redux');
const replace = require('rollup-plugin-replace');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    rollup: {
      plugins: [
        glimmerRedux({
          'middleware': './src/middleware/index.ts'
        })
      ]
    }
  });

  return app.toTree();
};
