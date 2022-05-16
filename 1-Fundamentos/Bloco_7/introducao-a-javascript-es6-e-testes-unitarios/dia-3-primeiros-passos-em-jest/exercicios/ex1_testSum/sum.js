// sum.js
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  } else {
    return a + b;
  }
}

module.exports = sum;