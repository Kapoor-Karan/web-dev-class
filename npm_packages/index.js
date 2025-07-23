// index.js
module.exports = {
  factorial: (n) => {
    if (!Number.isInteger(n) || n < 0) return null;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },

  isPrime: (n) => {
    if (!Number.isInteger(n) || n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  },

  fibonacci: (n) => {
    if (!Number.isInteger(n) || n < 1) return [];
    const sequence = [1];
    if (n === 1) return sequence;
    sequence.push(1);
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  },
  isEven: (n) => {
    if (!Number.isInteger(n)) return null;
    return n % 2 === 0;
  } 
};