'use strict';

module.exports = function(content, file, settings) {
  try {
    return require('./lib')(content, file, settings).renderTpl();
  } catch (e) {
    console.log(e);
    return e.toString();
  }
};
