const { isPrime } = require('./helpers');

const getBinaryPrimeSum = n => {
    if (n % 2 === 1)
        return isPrime(n - 2) ? [2, n - 2] : null;
    for (let i = 3; i < n / 2; i += 2)
        if (isPrime(i) && isPrime(n - i))
            return [i, n - i];
    return isPrime(n / 2) ? [n / 2, n / 2] : null;
};
