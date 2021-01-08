'use strict';

var log2 = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(log2, t);

	t.end();
});
