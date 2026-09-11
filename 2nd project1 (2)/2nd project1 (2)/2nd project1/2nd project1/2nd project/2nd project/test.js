// test.js
const assert = require('assert');
const { add, subtract } = require('./math');

console.log('Running tests...');

try {
  console.log('Testing add(2, 3)...');
  assert.strictEqual(add(2, 3), 5);
  console.log('✅ add(2, 3) passed');

  console.log('Testing subtract(5, 2)...');
  assert.strictEqual(subtract(5, 2), 3);
  console.log('✅ subtract(5, 2) passed');

  console.log('\n🎉 All tests passed successfully!');
} catch (error) {
  console.error('❌ Test failed!');
  console.error(error);
  process.exit(1);
}
