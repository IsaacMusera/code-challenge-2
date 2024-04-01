
console.log(generateprimenumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
// to check if the number is prime
function isPrime(num) {
    if (num <= 1) return false; 
  
    // Check if the number is divisible by any number other than 1 and itself
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false; // If divisible it is not a prime number
    }
    
    return true; // If not divisible it is a prime number
  }
  
  function generateprimenumbers(numbers) {
    const primes = []; 
    for (const num of numbers) {
      // look if if a number is a prime
      if (isPrime(num)) {
        primes.push(num); 
      }
    }
    return primes;
  }
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(generateprimenumbers(inputArray)); // Output: [2, 3, 5, 7]