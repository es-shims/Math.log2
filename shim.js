'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathLog2() {
	var polyfill = getPolyfill();
	define(Math, { log2: polyfill });
	return polyfill;
};
