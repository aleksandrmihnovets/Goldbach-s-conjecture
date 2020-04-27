const fs = require('fs'); 
const { isPrime } = require('./helpers');

const DELIMITER = ',';

const generatePrimes = n => {
    const primes = [2];
    for (let i = 3; i < n; i += 2)
        if (isPrime(i, primes)) primes.push(i);
    return primes;
};

const writePrimesToFile = (deg = 7) => {
    const primes = generatePrimes(10 ** deg);
    const filename = `Primes up to E${deg}.txt`;
    fs.writeFileSync(filename, primes.join(DELIMITER));
    console.log(`${primes.length} primes have been written to file ${filename}`);
};
