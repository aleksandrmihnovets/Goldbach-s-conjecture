const { isPrime } = require('./helpers');

const pi = x => {
    let count = 1;
    for (let i = 3; i <= x; i += 2)
        if (isPrime(i)) count++;
    return count;
}

for (let deg = 1; ; deg++) {
    const startTime = Date.now();
    console.log(`${pi(10**deg)} primes up to 10${deg > 1 ? `^${deg}` : ''}. Time = ${Date.now() - startTime}`);
}
