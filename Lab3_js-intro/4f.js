function isPrime(x) {
  for(let i = 2; i <= Math.sqrt(x); i++)
    if(x % i === 0) return false;
  return x > 1;
}

console.log(isPrime(3449));
console.log(isPrime(7));
console.log(isPrime(4));