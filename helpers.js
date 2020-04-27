const eratosthenes = n => {
    const isPrime = Array(n).fill(true), upperLimit = Math.sqrt(n), primes = [2];
    for (let i = 3; i <= upperLimit; i += 2) if (isPrime[i]) for (let j = i * i; j < n; j += i * 2) isPrime[j] = false;
    for (let i = 3; i < n; i += 2) if(isPrime[i]) primes.push(i);
    return primes;
};

const PRIMES_E6 = eratosthenes(10**6);

const isPrime = (n, primes = PRIMES_E6) => {
    const sqrt = Math.sqrt(n);
    for (let i = 0, div = 2; div <= sqrt; div = primes[++i] || div + 2)
        if (n % div === 0) return false;
    return n > 1;
};

module.exports.eratosthenes = eratosthenes;

module.exports.isPrime = isPrime;
