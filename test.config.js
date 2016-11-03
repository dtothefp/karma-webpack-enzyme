import 'babel-polyfill';
/**
 * Bootstrap file for Webpack pre-preprocessor utilized in Karma tests
 */
const {TEST_FILE} = process.env;
const re = !!TEST_FILE ?   new RegExp(`${TEST_FILE}\.js`) : /-spec\.js$/;

/**
 * require all the test files unless a single file is specified
 */
const testCtx = require.context('./test', true, /-spec\.js$/);

testCtx.keys().forEach((key) => {
  if (re.test(key)) {
    testCtx(key);
  }
});
