function getPrimes(n) {
    const isPrime = Array(n).fill(true), upperLimit = Math.sqrt(n), primes = [2];
    for (let i = 3; i <= upperLimit; i += 2) if (isPrime[i]) for (let j = i * i; j < n; j += i * 2) isPrime[j] = false;
    for (let i = 3; i < n; i += 2) if(isPrime[i]) primes.push(i);
    return primes;
}

function getPrimeSums(n, k = 2, min = 2, primes = getPrimes(n + 1)) {
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
}

console.log(getPrimeSums(13, 0))