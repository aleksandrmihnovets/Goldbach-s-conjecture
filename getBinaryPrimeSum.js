const isPrime = n => {
    if (n % 2 === 0) return n === 2;
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2)
        if(n % i === 0) return false;
    return n > 1;
};

const getBinaryPrimeSum = n => {
    if (n % 2 === 1)
        return isPrime(n - 2) ? [2, n - 2] : null;
    for (let i = 3; i < n / 2; i += 2)
        if (isPrime(i) && isPrime(n - i))
            return [i, n - i];
    return isPrime(n / 2) ? [n / 2, n / 2] : null;
};
