'use strict';

module.exports = {
  version: '5.5.4',
  sys: {},
  createProgram() {
    throw new Error('The bundled TypeScript stub cannot create programs.');
  },
  transpileModule() {
    throw new Error('The bundled TypeScript stub cannot transpile source files.');
  }
};
