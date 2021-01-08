import log2, * as log2Module from 'math.log2';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(log2, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(log2Module).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = log2Module;
	t.equal(await import('math.log2/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.log2/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.log2/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
