const { eratosthenes } = require('helpers');

const getPrimeSums = (n, k = 2, min = 2, primes = eratosthenes(n + 1)) => {
    let sums = [];
    for (const prime of primes) {
        if (prime < min) continue;
        else if (prime > n / k) return sums;
        else if (k === 1 && prime === n) return [[prime]];
        else if (k > 1) {
            const restSums = getPrimeSums(n - prime, k - 1, prime, primes);
            sums = sums.concat(restSums.map(sum => [prime, ...sum]));
        }
    }
    return sums;
};
