'use strict';

const glimmerRedux = require('rollup-plugin-glimmer-redux');
const replace = require('rollup-plugin-replace');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    babel: {
      plugins: [
        'transform-object-rest-spread',
      ]
    },
    rollup: {
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.EMBER_ENV)
        }),
        glimmerRedux({
          'store': './src/store.js'
        })
      ]
    }
  });

  return app.toTree();
};
