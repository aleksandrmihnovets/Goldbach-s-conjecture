function getPrimes(n) {
    const isPrime = Array(n).fill(true), upperLimit = Math.sqrt(n), primes = [2];
    for (let i = 3; i <= upperLimit; i += 2) if (isPrime[i]) for (let j = i * i; j < n; j += i * 2) isPrime[j] = false;
    for (let i = 3; i < n; i += 2) if(isPrime[i]) primes.push(i);
    return primes;
}

function getPrimePartitions(n, k = 2, minPrime = 2, primes = getPrimes(n-2*k+3)) {
    let partitions = [];
    for (let i = primes.indexOf(minPrime); i < primes.length; i++) {
        const prime = primes[i];
        if (prime > n / k) return partitions;
        else if (k === 1 && prime === n) return [[prime]];
        else if (k > 1) {
            const restPartitions = getPrimePartitionsRec(n - prime, k - 1, prime, primes);
            partitions = [...partitions, ...restPartitions.map(partition => [prime, ...partition])];
        }
    }
    return partitions;
}
