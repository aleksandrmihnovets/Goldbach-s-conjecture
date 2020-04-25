class Primes {
    constructor(n) {
        this.n = n;
        this.primes = this.getPrimes();
        this.binaryPrimeSums = this.getBinaryPrimeSums();
        this.ternaryPrimeSums = this.getTernaryPrimeSums();
    }

    getPrimes(n = this.n) {
        var isPrime = Array(n).fill(true), upperLimit = Math.sqrt(n), primes = [2];
        for (var i = 3; i <= upperLimit; i += 2) if (isPrime[i]) for (var j = i * i; j < n; j += i*2) isPrime[j] = false;
        for (var i = 3; i < n; i += 2) if(isPrime[i]) primes.push(i);
        return primes;
    }

    getBinaryPrimeSums(n = this.n, minPrime = 2) {
        const { primes } = this, sums = [];
        let firstPrimeIndex = primes.indexOf(minPrime), lastPrimeIndex = primes.length - 1;
        let firstPrime = primes[firstPrimeIndex], lastPrime = primes[lastPrimeIndex];
        while (firstPrime <= n / 2 && lastPrime >= n / 2) {
            if (n % 2 === 1 && firstPrime > 2) return sums;
            else if (firstPrime + lastPrime < n) firstPrime = primes[++firstPrimeIndex];
            else if (firstPrime + lastPrime > n) lastPrime = primes[--lastPrimeIndex]
            else {
                sums.push([firstPrime, lastPrime]);
                firstPrime = primes[++firstPrimeIndex];
                lastPrime = primes[--lastPrimeIndex];
            }
        }
        return sums;
    }

    getTernaryPrimeSums(n = this.n) {
        let sums = [];
        for (let prime of this.primes) {
            if (prime > n / 3 || (n % 2 === 0 && prime > 2)) return sums;
            const rest = n - prime;
            const restBinarySums = this.getBinaryPrimeSums(rest, prime);
            const ternarySums = restBinarySums.map(sum => [prime, ...sum]);
            sums = [...sums, ...ternarySums];
        }
        return sums;
    }
}
