const { eratosthenes } = require('./helpers');

const getPrimeSums = (n, k = 2, primes = eratosthenes(n + 1)) => {
    const indices = Array(k).fill(0), sums = [];
    let term = 0, sum = k * 2;
    while (term >= 0) {
        if (sum === n) sums.push(indices.map(i => primes[i]));
        else if (sum < n) term = k - 1;
        if (sum >= n || indices[term] === primes.length - 1) term -= 1;
        for (let i = k - 1; i >= term; i--) {
            sum += primes[indices[term] + 1] - primes[indices[i]];
            indices[i] = indices[term] + 1;
        }
    }
    return sums;
};
