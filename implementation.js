'use strict';

var LOG2E = Math.LOG2E;
var log = Math.log;

module.exports = function log2(value) {
	return log(value) * LOG2E;
};
