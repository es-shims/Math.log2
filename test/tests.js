'use strict';

var almostEqual = function (actual, expected) {
	return actual - expected < 1e-6 && expected - actual < 1e-6;
};

module.exports = function (log2, t) {
	t.test('is correct for small numbers', function (st) {
		st.equal(log2(-1e-50), NaN, 'log2(-1e-50)');
		st.end();
	});

	t.test('is correct for edge cases', function (st) {
		st.equal(log2(NaN), NaN, 'log2(NaN)');
		st.equal(log2(+0), -Infinity, 'log2(+0)');
		st.equal(log2(-0), -Infinity, 'log2(-0)');
		st.equal(log2(1), +0, 'log2(1)');
		st.equal(log2(Infinity), Infinity, 'log2(Infinity)');
		st.end();
	});

	t.test('should have the right precision', function (st) {
		st.ok(almostEqual(log2(5), 2.321928094887362), 'log2(5)');
		st.ok(almostEqual(log2(32), 5), 'log2(32)');
		st.end();
	});
};
